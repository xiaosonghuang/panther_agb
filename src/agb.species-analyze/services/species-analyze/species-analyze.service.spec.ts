// /* tslint:disable:no-unused-variable */
//
// import {
//   beforeEach, beforeEachProviders,
//   describe, xdescribe,
//   expect, it, xit,
//   async, inject
// } from '@angular/core/testing';
//
// import { speciesAnalyzeService } from './species-analyze.service';
//
// import {provide} from '@angular/core';
// import {MockBackend, MockConnection} from '@angular/http/testing';
// import {metaboliteConcentration} from '../../models/metaboliteConcentration';
// import {LoginService, LoginTestingService} from "../../../auth/services";
// import { APP_ROUTER_PROVIDERS, AppComponent, environment } from '../../../app';
//
// import {
//   Http,
//   HTTP_PROVIDERS,
//   Response,
//   ResponseOptions,
//   BaseRequestOptions,
// } from '@angular/http';
//
// import {AppSettings} from '../../../app/';
//
//
// import {speciesTreeNode, speciesTreeNodeType} from "../../models/species";
//
// xdescribe('speciesAnalyze Service', () => {
//
//   let service: speciesAnalyzeService;
//   let mockBackend: MockBackend;
//
//   const mockHttpProvider = {
//     deps: [MockBackend, BaseRequestOptions],
//     useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
//       return new Http(backend, defaultOptions);
//     }
//   }
//
//   beforeEachProviders(() => [
//     MockBackend,
//     BaseRequestOptions,
//     provide(Http, mockHttpProvider),
//     APP_ROUTER_PROVIDERS,
//     provide(LoginService, { useClass: LoginTestingService }),
//     speciesAnalyzeService
//   ]);
//
//   beforeEach(inject([speciesAnalyzeService, MockBackend], (s, m) => {
//     service = s;
//     mockBackend = m;
//   }));
//
//   let responseData: { [solution: string]: Array<string> } = {
//     "solution-1": ["pathway-1", "pathway-2", "pathway-3"],
//     "solution-2": ["pathway-1", "pathway-2"],
//     "solution-3": ["pathway-1", "pathway-3"],
//     "solution-4": ["pathway-2", "pathway-4"],
//     "solution-5": ["pathway-4"]
//   };
//
//   it('should ...', () => {
//     expect(service).toBeTruthy();
//   });
//
//   it('should get solutions', async(() => {
//
//     let apiData = [
//       { name: 'a', change: 1, exactValue: undefined },
//       { name: 'b', change: 2, exactValue: undefined },
//     ];
//
//     mockBackend.connections.subscribe(
//       (connection: MockConnection) => {
//         let options = new ResponseOptions({ body: responseData });
//         connection.mockRespond(new Response(options));
//
//         let body = JSON.parse(connection.request.json());
//         expect(body).toBeDefined();
//         expect(body.concentrationChanges.length).toEqual(apiData.length);
//
//         let expectedUrl = `${AppSettings.API_ENDPOINT}/speciess-analyze`;
//         expect(connection.request.url).toEqual(expectedUrl);
//       });
//
//     service.startSolutions("analyze name", apiData, (data) => {
//       expect(data).toEqual(responseData);
//     });
//
//   }));
//
//   let pathwayData: { [solution: string]: Array<string> } = {
//     "pathway-1": ["solution-1", "solution-2", "solution-3"],
//     "pathway-2": ["solution-1", "solution-2", "solution-4"],
//     "pathway-3": ["solution-1", "solution-3"],
//     "pathway-4": ["solution-4", "solution-5"],
//   };
//
//   it('should reverseDict', () => {
//     expect(service.reverseDict(responseData)).toEqual(pathwayData);
//     let reverseOfReverse = service.reverseDict(service.reverseDict(responseData));
//     expect(reverseOfReverse).toEqual(responseData);
//   });
//
//   it('should select most active pathway', () => {
//     expect(service.mostActivePathway(pathwayData)).toEqual("pathway-1");
//   });
//
//   it('should calculate new branch', () => {
//
//     let children: { [solution: string]: Array<string> } = {
//       "pathway-2": ["solution-1", "solution-2"],
//       "pathway-3": ["solution-1", "solution-3"],
//     };
//
//     let parentsChildren: { [solution: string]: Array<string> } = {
//       "pathway-4": ["solution-4", "solution-5"],
//       "pathway-2": ["solution-4"],
//     };
//
//     let expectBranch = service.newBranchsOfSolution("pathway-1", pathwayData);
//
//     expect(expectBranch[0]).toEqual(children);
//     expect(expectBranch[1]).toEqual(parentsChildren);
//   });
//
//   it('should create species solution tree', () => {
//     let solutionTree: speciesTreeNode = {
//       name: "All",
//       type: speciesTreeNodeType.All,
//       active: true,
//       highlight: false,
//       children: [
//         <speciesTreeNode>{
//           name: "pathway-4",
//           children: [
//             <speciesTreeNode>{
//               name: "pathway-2",
//               children: [
//                 <speciesTreeNode>{
//                   name: "solution-4",
//                 }
//               ]
//             },
//             <speciesTreeNode>{
//               name: "solution-5"
//             }
//           ]
//         },
//         <speciesTreeNode>{
//           name: "pathway-1",
//           children: [
//             <speciesTreeNode>{
//               name: "pathway-3",
//               children: [
//                 <speciesTreeNode>{
//                   name: "solution-3"
//                 }
//               ]
//             },
//             <speciesTreeNode>{
//               name: "pathway-2",
//               children: [
//                 <speciesTreeNode>{
//                   name: "pathway-3",
//                   children: [
//                     <speciesTreeNode>{
//                       name: "solution-1"
//                     }
//                   ]
//                 },
//                 <speciesTreeNode>{
//                   name: "solution-2"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     };
//
//     let expectedTree = service.getSolutionTree(pathwayData);
//     expect(expectedTree).toEqual(solutionTree);
//   });
//
// });
