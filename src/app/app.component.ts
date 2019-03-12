import { Component } from '@angular/core';
import {HelloRequest, HelloReply, RepeatHelloRequest} from './helloworld_pb'
// import {GreeterClient} from '../../../proto/src/main/proto/helloworld_grpc_web_pb'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}

let request = new HelloRequest();
//
// const client = new GreeterClient('http://' + window.location.hostname + ':8080',
//   null, null);
//
// // simple unary call
// let request = new HelloRequest();
// request.setName('World');
//
// client.sayHello(request, {}, (err, response) => {
//   console.log(response.getMessage());
// });
