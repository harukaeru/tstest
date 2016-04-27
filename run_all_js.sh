for f in $(ls out/*.js)
do
    echo "\033[33;32m$f\033[33;0m"
    node $f
done
