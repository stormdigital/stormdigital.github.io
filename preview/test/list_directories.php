<?php
// Get all directories in the current directory
$directories = array_filter(glob('*'), 'is_dir');

// Output directories separated by newline character
echo implode("\n", $directories);
?>
