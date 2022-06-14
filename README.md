# FFC AHWR Prototype

> Prototype for FFC AHWR service

## Deployment

The deployment to Heroku is done automatically via
[GitHub integration](https://devcenter.heroku.com/articles/github-integration).

### Password

The deployed application needs a password to be set. This is done by setting an
env var with the name `PASSWORD` to a value of your choice. It is recommended
to use an easily remembered password as the purpose is to prevent people
stumbling upon the website and thinking it is real as opposed to making it
secure. After all, the content is all in this public repo!

The easiest way to set the env var is via the
[Heroku Dashboard](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard).
