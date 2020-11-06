FROM nginx:1.19-alpine
RUN apk add --update nodejs npm
WORKDIR /usr/share/nginx/html
ADD index.html /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/html
COPY package-lock.json /usr/share/nginx/html
COPY package.json /usr/share/nginx/html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
COPY html /usr/share/nginx/html/html
RUN npm install


