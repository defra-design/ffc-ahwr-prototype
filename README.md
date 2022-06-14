# FFC AHWR Content

> Content for Animal Health and Welfare Review (AHWR) private beta

The intention of this repo is to store only the content required for the
private beta for AHWR. It is a
[GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs)
application and hosted on Heroku, available at
[https://ffc-ahwr-content.herokuapp.com/](https://ffc-ahwr-content.herokuapp.com/).
It is password protected to prevent people stumbling upon it and thinking it is
a real service.

The application will only last as long as the private beta runs at which point
it will be removed and the content will be moved to GOV.UK. The prototype kit
was used as it was a quick and easy way to get the content on the internet
using a system Content Designers were familiar with. The performance of the
site is not so important during private beta so using the default Heroku
hosting is sufficient.

## Linking to private beta service

There are several points within the content directing the user to the actual
service. The URL for the service is contained in [app/config.js](app/config.js)
with the name `serviceUrl`. This needs to be updated to match the URL for the
service to be tested.

The default value is [http://localhost:3000](http://localhost:3000). It can be
overridden by setting an environment variable with the name `SERVICE_URL`. This
is the best way to get the deployed application to point to the correct
environment. Note that the URL should NOT end with a forward slash.

## Deployment

The deployment to Heroku would normally be done automatically via
[GitHub integration](https://devcenter.heroku.com/articles/github-integration),
however, at the time of writing (2022-05-24) this has been disabled due to a
security [incident](https://status.heroku.com/incidents/2413).

Whilst automatic deployments are not possible, manual deployment from the local
machine is the easiest approach see
[deploying with Git](https://devcenter.heroku.com/articles/git) for details.
