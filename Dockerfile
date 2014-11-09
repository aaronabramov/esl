FROM    ubuntu
COPY    . /src
RUN     apt-get update
RUN     apt-get install -y nodejs npm git git-core
RUN     cd /src; npm install
EXPOSE  3009
CMD     cd /src && nodejs ./run.js
