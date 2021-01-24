# Tutorial: Using Unit Testing, ESLint, Github with Travis and Heroku for CI/CD
## (README IN PROGRESS, INSTRUCTIONS MAY NOT BE CORRECT)
## (Updated 2020)

This repository demonstrates the following:

* Syntax Checking using eslint
* Unit testing with Mocha / Chai
* Using Github for version control
* Using Travis for Continuous Integration / Continuous Delivery (CI/CD)
* Using Heroku with Travis for Continuous Deployment (CD)

## Requirements
* Node 14.x
* NPM / NPX 6.x

## Node Libraries used
* Dotenv
* Mocha
* Chai
* Express
* ESLint
* ESlint Plugin Support
* ESLint AirBnB Support



## Install with NPM -i
* dotenv
* mocha
* chai
* express

## Install with NPM --save-dev
* eslint
* eslint rules (airbnb)

install eslint globally to make the CLI available

You may need administrator permission requirements (may need to sudo or
launch git bash shell as administrator)

change the extends settings in .eslintrc.json to

    "extends": "airbnb-base"


Add the sample app files server.js and controller/api-routes.js i.e.
write out your code

add, commit and push changes.

return to github repo and configure the following settings

* Navigate to the repo's page, then click the "Settings" tab.

* Select "Branches" from the left sidebar.

* Under "Branch protection rules", click "Add Rule"

* For "Branch name pattern" , choose "master". The page should display ""

* Check off the following options:

  * "Protect this branch"

  * "Require pull request reviews before merging"

  * "Include administrators"

  * "Require status checks to pass before merging"

  * "Require branches to be up to date before merging"

* Click "Save changes"


With this setup, you will need to add a colleague to be a collaborator
so they can approve your changes.

Make sure all code changes are reviewed and merged to main using Pull
Requests.

one all commits are pushed to main, return to your terminal

enter `git push heroku main`

This should push your changes from the main branch to heroku.

In the output messages, you should see the resultant URL. browse to it
to confirm that your new site is live.


### Associate Travis with your Github Repository

* Navigate to <https://github.com/marketplace/travis-ci>.

* Select the option to "Set up a new plan" and choose the $0 "Open Source" plan when prompted.

* Click "Install it for free" and then on the next page click "Complete order and begin installation".

* On the next page select the radio button that reads "Only select repositories".

* From the "Select repositories" dropdown, choose your project repo.

* Click the "Install" button to complete the process

### Part 3(b): Ensuring that your Github is connected to the Travis via the GitHub Plugin for Travis

Browse to <https://github.com/marketplace/travis-ci> and install the Travis CI App from the GitHub Marketplace

Make sure you install the "Open Source" Pricing Version.

### Part 4: Install Heroku and Travis CLIs

Next, you will install the appropriate CLIs for usage in your project.

This demo assumes that you have installed Heroku CLI, described earlier. If not, go to

<https://devcenter.heroku.com/articles/heroku-cli#download-and-install>

and proceed to install the Heroku CLI for your operating system

Next, you will need the Travis CLI. The Travis CLI (at this point in time) requires the _Ruby_ programming language / environment to be installed.

The instructions to install the Travis CLI are at

<https://github.com/travis-ci/travis.rb#installation>

The results should look similar to the image below.

![Screenshot_2019-05-12 -9.36.28-PM.png](images/Screenshot_2019-05-12%20-9.36.28-PM.png)

Additional notes:

Windows Users don't have Ruby installed natively. So these users have to install Ruby first and can do so via RubyInstaller, at

<https://rubyinstaller.org/>

Mac Users should install Homebrew (it's a backup option, to update the operating system or Ruby), the package manager for OS X. The one-line instruction to install Homebrew can be found at

<https://brew.sh/>

If you are a Mac user, and you have fresh installation of Mac OS X, you may also have to install the XCode command line development tools as well. If this is the case, then perform the following command at the terminal

```
xcode-select --install
```

Once you have installed any prerequisites for your operating system, proceed with installing the Travis CLI, by entering the command:

```
gem install travis -v 1.8.10 --no-rdoc --no-ri
```

Then confirm it is all installed by testing out the version number for travis CLI

```
travis version



mac - run brew update
