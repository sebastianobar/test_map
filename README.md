# README

## Local Development Startup

Install Ruby 3.2.2, preferably with rbenv, and install bundler.
Install Node 18.16.0 preferably with nodenv and yarn.

Simply install bundle, run postgres and redis docker container, and run the server locally.

```bash
gem install mailcatcher

bundle install

docker run --name local-togheterbill-pg -e POSTGRES_HOST_AUTH_METHOD=trust -p 5432:5432 -d postgres
docker run --name local-togheterbill-redis -p 6379:6379 -d redis

bin/rails db:prepare

bin/dev
```

With bin/dev will run all the Procfile.dev processes, including the rails server, sidekiq, and a mailcatcher smtp server.
Note: I will add a docker-compose file to run all of this in the future.
