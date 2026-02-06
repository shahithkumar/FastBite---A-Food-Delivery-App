#!/usr/bin/env bash
# exit on error
set -o errexit

python3.9 -m pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput
python3.9 manage.py migrate --noinput
