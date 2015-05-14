#!/bin/sh 

name='2015-05-14';

for fileName in *.log;
do
	for((j=1;j<=10;j++))
		do
		if [[ $fileName == *"$name-$j"* ]]
		then
		echo "voila"
		mv $fileName 14-05-2015-$j.log	
		else 
		echo "file not found"
		fi
	done
done

echo "completed"

