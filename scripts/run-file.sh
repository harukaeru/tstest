if [[ $# < 1 ]]; then
    echo '1 argument required';
fi
file=$1
if [[ $file == *.js ]]; then
    echo "\033[33;31m--- Start $file ---\033[33;0m";
    node $file
fi
