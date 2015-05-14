#!/bin/sh 

for fileName in *.log;
do
	for((j=1;j<=10;j++))
		do
		temp=$(cat $fileName)
		echo $temp
		if [[ $((temp % 2)) == 0 ]];
			then
		#	echo "voila"
			echo $((temp*5)) > $fileName
			break #without break , i will keep multiplying
		elif [[ $temp == 5 ]];
			then
			#echo "voila"
			echo "7" > $fileName
			break		
		#else 
		#	echo "file not found"
		fi
	done
done

echo "completed"

