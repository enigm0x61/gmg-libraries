import socketcluster from 'socketcluster-client';
import {of, fromEvent} from 'rxjs';
import {map, switchMap, mergeMap} from 'rxjs/operators';

export const config = {
    hostname: 'ws.uteclab.com',
    port: 8000,
    secure: true,
    rejectUnauthorized: false,
};

export const client = socketcluster.create(config);


// console.log(client);

// const socketcluster$ = of(client);
const socketcluster$ = of(client);


// export const connection$ = socketcluster$
//     .pipe(
//         switchMap(socketcluster => {
//                 console.log(socketcluster);
//
//                 return socketcluster;
//             },
//             // fromEvent(socketcluster, 'connection')
//             //   .pipe(
//             //     map(client => {
//             //       return { socketcluster, client }
//             //     })
//             //   )
//         ),
//     )

// const disconnect$ = connection$
//   .pipe(
//     mergeMap(({ client }) =>
//       fromEvent(client, 'disconnect')
//         .pipe(
//           map(() => {
//             console.log(client);
//           })
//         )
//     )
//   )

async function subscribe() {
    // const channel = client.subscribe('symbolTicker_prod');
    //
    // await channel.listener('subscribe').once();
    //
    // for await (let data of channel) {
    //     // console.log(JSON.parse(data));
    // }
}








// subscribe()