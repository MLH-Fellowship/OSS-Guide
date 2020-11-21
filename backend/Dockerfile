FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y software-properties-common 
RUN apt-add-repository universe
RUN apt-get update -y
RUN apt-get install -y python3-pip python-dev build-essential graphviz 
COPY . /app
WORKDIR /app
RUN pip3 install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["wsgi.py"]