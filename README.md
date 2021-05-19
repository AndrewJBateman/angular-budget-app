# :zap: Angular Budget App - Tutorial Code by Devstackr

* Angular tutorial app to add items to a budget list.
* Balance shown at top. Inputs section where an item can be added - positive numbers are income and negative numbers are expenses - shown in separate columns.
* Clicking on a budget item opens a modal where the item amount and description can be edited.
* All code by [Devstackr](https://www.youtube.com/channel/UCbwsS1m4Hib6R-9F1alus_A/featured) from Youtube Tutorial [Angular - Build a Budget Calculator Application](https://www.youtube.com/watch?v=sU4z4Ti-8OQ&t=278s).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-budget-app?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-budget-app?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-budget-app?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-budget-app?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Budget App - Tutorial Code by Devstackr](#zap-angular-budget-app---tutorial-code-by-devstackr)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Youtube tutorial uses Angular 7. I used Angular 8 then upgraded to 11 then 12.
* [Angular material](https://material.angular.io/) installation is now much easier than as shown in the video.

## :camera: Screenshots

![Angular page](./img/budget.png)
![Angular page](./img/modal.png)

## :signal_strength: Technologies

* [Angular v12](https://angular.io/)
* [Angular Material v12](https://material.angular.io/)
* [Bulma v0.9.2](https://bulma.io/documentation/) CSS framework
* [rxjs v6](https://angular.io/guide/rx-library) reactive programming library

## :floppy_disk: Setup

* To start the server on _localhost://4200_ type: 'ng serve'

## :computer: Code Examples

* Modal created using Angular MatDialog service.

```typescript
onCardClicked(item: BudgetItem) {
  const dialogRef = this.dialog.open(EditItemModalComponent, {
    width: '580px',
    data: item
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.update.emit({
        old: item,
        new: result
      });
    }
  })
}
```

## :cool: Features

* [Angular Material Dialog](https://material.angular.io/components/dialog/overview) modal used to edit budget items.

## :clipboard: Status & To-do list

* Status: Completed, updated may 2021. This is working in desktop mode but does not resize correctly to mobile size.
* To-do: nothing

## :clap: Inspiration

* [Angular - Build a Budget Calculator Application](https://www.youtube.com/watch?v=sU4z4Ti-8OQ&t=278s)
* [Devstackr: Github repo](https://github.com/Devstackr/budget-app-angular)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
