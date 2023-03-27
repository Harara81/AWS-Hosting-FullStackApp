### Pipeline

- When pushing a new change to Github repo, CircleC1 will trigger that change and start the following pipline

* Spin up environment >>
* Preparing environment variables >>
* Install Node.js 14.15 >>
* Checkout code >>
* Install Front-End Dependencies >>
* Install API Dependencies >>
* Front-End Build >>
* API Build >>
* Install Deployment Dependencies >>
* Send env variables from CircleCi to EB >>
* api:deploy + frontend.deploy >>
