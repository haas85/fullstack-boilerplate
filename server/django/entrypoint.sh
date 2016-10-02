#!/bin/bash

checkManage() {
    if [ ! -f /src/manage.py ]; then
        if $1 ; then
            text="No django project detected, insert name"
        else
            text="No text inserted, insert valid name"
        fi
        echo "$text and push enter"
        read projectName
        if [ -z $projectName ]; then
            checkManage false
        else
            django-admin.py startproject $projectName /src
        fi
    fi
}

checkManage true

python manage.py migrate
python manage.py runserver 0.0.0.0:8000
