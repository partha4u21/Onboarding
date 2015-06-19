#!/usr/bin -ex
NOW=$(date +"%Y-%m-%d")
echo $NOW

for ((i = 1; i < 11; i++));
do
	fileName="$NOW-$i.log"
	echo $i > $fileName
done

