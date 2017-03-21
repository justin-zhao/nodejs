#!/bin/bash
#Refer to http://www.runoob.com/nodejs/nodejs-tutorial.html

#Check distribution version
apt-get -h 2>/dev/null
distrover=$?

if [ "$distrover"x = "0"x ]; then
	sudo apt-get install -y nodejs npm nodejs-legacy
else
	sudo yum install -y nodejs npm nodejs-legacy
fi
