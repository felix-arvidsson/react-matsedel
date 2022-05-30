FROM python:3
RUN apt-get update
WORKDIR /app
COPY ./requirements.txt requirements.txt
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . .