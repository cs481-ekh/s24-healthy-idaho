FROM python:3.10

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /code

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# copy
ADD . /code

#EXPOSE 8001

#CMD ["./wait.sh", "database:3306", "--timeout=30", "--", "python", "manage.py", "runserver", "0.0.0.0:8000"]


