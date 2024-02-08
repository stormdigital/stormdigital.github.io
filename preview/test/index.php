<!DOCTYPE html>
<html>
<head>
    <title>Folder Viewer</title>
</head>
<body>
    <h1>Folder Viewer</h1>
    <?php
    // Get all directories in the current directory
    $directories = array_filter(glob('*'), 'is_dir');

    // Loop through each directory
    foreach ($directories as $directory) {
        // Create an iframe for each directory
        echo "<iframe src='$directory' width='100%' height='300px'></iframe><br>";
    }
    ?>
</body>
</html>