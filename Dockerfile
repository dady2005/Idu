FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/Dady24/Denzel-V2 /root/Dady24

WORKDIR /root/lazack/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
