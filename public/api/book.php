<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Read credentials from Apache environment variables
$host = getenv('DB_HOST') ?: 'localhost';
$db   = getenv('DB_NAME') ?: 'oredfolio';
$user = getenv('DB_USER') ?: 'oredfolio';
$pass = getenv('DB_PASS') ?: '';

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    $pdo = new PDO($dsn, $user, $pass, $options);
    
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) throw new Exception('Invalid data');

    $act = $data['act'] ?? '';
    $venue = $data['venue'] ?? '';
    $date = $data['date'] ?? '';
    $email = $data['email'] ?? '';
    $message = $data['message'] ?? '';

    $stmt = $pdo->prepare('INSERT INTO booking_inquiries (act, venue, target_date, contact_email, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())');
    $stmt->execute([$act, $venue, $date, $email, $message]);

    // Send email notification
    $to = 'redmachineusa@gmail.com';
    $subject = "New Booking Inquiry: $act at $venue";
    $body = "New booking inquiry received:\n\nFormat: $act\nVenue: $venue\nDate: $date\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: redmachineusa@gmail.com\r\nReply-To: $email";

    mail($to, $subject, $body, $headers);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>

