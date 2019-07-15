### Application Workflow gifs.

Post Office Route Workflow.

![alt tag](https://github.com/divyanshu-rawat/Post-Office-App/blob/master/AppDesign/postOfficeWorkflow.gif)

#

Shipment Route Workflow.

![alt tag](https://github.com/divyanshu-rawat/Post-Office-App/blob/master/AppDesign/shipmentWorkflow.gif)

#

Filters Workflow.

![alt tag](https://github.com/divyanshu-rawat/Post-Office-App/blob/master/AppDesign/filtersWorkflow.gif)


### Post Office App Folder Structure

After creation and a successful build, your project should have the following file structure:

```
  src/
    app/
      Services/
        post-office-service/
          post-office.service.ts
        shared-services/
          dialog.service.ts
        shipment-service/
          shipment.service.ts
      components/
        app-header/
        post-office/
          post-office-item
          post-office.component.html
          ...
        shared-components/
          add-update-post-office-dialog/
          add-update-shipment-dialog/
          confirmational-dialog/
        shipment/
          shipment-list-item/
          shipment.component.ts
          ....
      Interfaces/
      app-routing.module.ts
      app.component.html
      app.component.scss
      app.component.ts
      app.module.ts
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
