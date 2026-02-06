#!/usr/bin/env bash
# exit on error
set -o errexit

python3.12 -m pip install -r requirements.txt
python3.12 manage.py collectstatic --noinput
python3.12 manage.py migrate --noinput
