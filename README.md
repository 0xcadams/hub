# Hub

Documentation is in progress...

```
docker build -t hub-frontend-menu frontend-menu/
docker run --restart="always" --name hub-frontend-menu -d -p 8392:3000 hub-frontend-menu
```

```
sudo docker run -d --name="private-bin" --restart="always" --read-only -p 8714:8080 -v privatebin-data:/srv/data/private-bin -v "$(pwd)"/private-bin/conf.php:/srv/cfg/conf.php:ro privatebin/nginx-fpm-alpine
```

```
certbot certonly --dns-cloudflare --dns-cloudflare-credentials ~/.secrets/certbot/cloudflare.ini -d "login.cadams.io"
```

```
cp ./nginx/code-server.conf /etc/nginx/sites-available/code-server.conf
nginx -t
nginx -s reload
```


```
go get github.com/vouch/vouch-proxy
cp ./vouch/config.yml ~/go/src/github.com/vouch/vouch-proxy/config/config.yml
cd ~/go/src/github.com/vouch/vouch-proxy
go build
```

```
cp ./vouch/vouch-proxy.service /etc/systemd/system/vouch-proxy.service
systemctl daemon-reload
systemctl start vouch-proxy
systemctl enable vouch-proxy
systemctl status vouch-proxy
```

```
wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh | bash
docker run --name pgadmin -p 51058:80 -e "PGADMIN_DEFAULT_EMAIL=c@cadams.io" -e "PGADMIN_DEFAULT_PASSWORD=***" -d dpage/pgadmin4
```