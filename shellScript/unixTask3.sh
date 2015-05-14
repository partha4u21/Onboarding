#!/bin/sh 

for fileName in *.log;
do
	for((j=1;j<=10;j++))
		do
		temp=$(cat $fileName)
		if [[ $((temp % 2)) == 0 ]];
		then
echo "voila"
		echo $((temp*5)) > $fileName	
		else 
		echo "file not found"
		fi
	done
done

echo "completed"

