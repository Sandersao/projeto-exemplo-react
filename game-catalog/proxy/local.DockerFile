FROM nginx

COPY ./dev.nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]