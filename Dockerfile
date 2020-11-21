FROM ubuntu:latest
RUN sudo apt-get install software-properties-common
RUN sudo apt-add-repository universe
RUN sudo apt-get update
RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential graphviz
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
ENTRYPOINT ["python"]
CMD ["wsgi.py"]