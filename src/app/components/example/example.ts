// import { Component, Inject, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ConfirmationService } from 'primeng/api';
// // import { CONFIRM_DIALOG_TYPE } from 'src/app/const/app-constants';
// // import { converDate, convertTextMessage, copyObject, toFixNumber } from 'src/app/const/common-function';
// // import { ModelLibraryService } from './model-library.service';
// // import { AppService } from 'src/app/services/app.service';
// // import { spinnerService } from 'src/app/services/spinner.service';
// // import { TranslateService } from '@ngx-translate/core';
// // import { AssetClassSubClassService } from '../asset-class-subClass/asset-class-subClass.service';
// // import { AccountService } from "../../admin/account-management/account.service";
// // import { DialogServiceToken } from 'src/app/core-layout/shared/dynamic-dialog/dialog-service-multi';
// // import { DialogService } from 'primeng/dynamicdialog';
// // import { FilterViewComponent } from 'src/app/core-layout/shared/components/filter-view/filter-view.component';
// // import { FilterService } from 'src/app/core-layout/shared/components/filter-view/filter-view.service';
// // import { environment } from 'src/environments/environment';
// // import { log } from 'three/examples/jsm/nodes/Nodes';
// // import { FilterViewCloneComponent } from 'src/app/core-layout/shared/components/filter-view/filter-view-clone/filter-view-clone.component';
//
// @Component({
//   selector: 'app-model-library',
//   templateUrl: './model-library.component.html',
//   styleUrls: ['./model-library.component.scss'],
//   providers: [
//     // { provide: DialogServiceToken, useClass: DialogService }
//   ],
// })
// export class ModelLibraryComponent implements OnInit {
//   public products: any[] = [];
//   public dataTable: any[] = [];
//   // protected readonly toFixNumber = toFixNumber;
//   public pageSize = 10;
//   public pageIndex = 0;
//   public totalElement: number
//   // public selectedItems: any[] = [
//   //   { columns: 1, name: this.translation.instant('model_library.form.manufacturer'), isShow: true },
//   //   { columns: 2, name: this.translation.instant('model_library.form.model'), isShow: true },
//   //   { columns: 3, name: this.translation.instant('model_library.form.class'), isShow: true },
//   //   { columns: 4, name: this.translation.instant('model_library.form.sub_class'), isShow: true },
//   //   { columns: 5, name: this.translation.instant('model_library.form.item_code'), isShow: true },
//   //   { columns: 6, name: this.translation.instant('model_library.form.item_name'), isShow: true },
//   //   { columns: 7, name: this.translation.instant('model_library.form.creator'), isShow: true },
//   //   { columns: 8, name: this.translation.instant('model_library.form.update'), isShow: true },
//   // ]
//   public checkAll: boolean = true;
//   public showPopupImport: boolean = false;
//   public showPopupImportImg: boolean = false;
//   public listClass: any[] = []
//   public listSubClass: any[] = []
//   public dataSearch: any = {
//     "manuFacturer": undefined,
//     "model": undefined,
//     "classCode": undefined,
//     "subclassName": undefined,
//     "code": undefined,
//     "name": undefined,
//     "createdBy": undefined
//   }
//
//   public selectedData: any[] = []
//   public showCreate: boolean = false
//   public showUpdate: boolean = false
//   public idCatalog: any
//
//   constructor(
//     private router: Router,
//     private confirmationService: ConfirmationService,
//   //   private modelLibraryService: ModelLibraryService,
//   //   private appService: AppService,
//   //   private spinnerService: spinnerService,
//   //   private translation: TranslateService,
//   //   private assetClassSubClassService: AssetClassSubClassService,
//   //   private accountService: AccountService,
//   //   private filterSaverice: FilterService,
//   //   @Inject(DialogServiceToken) private dialogService: DialogService,
//   // ) {
//   //   this.paginatorDataTable() // goi sau khi co data tu api ve
//   // }
//   // private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
//   // userId: any
//
//
//   // ngOnInit() {
//     // let dataUser = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
//     // this.userId = dataUser.userToken.userID
//     // let hasRole = this.accountService.checkPermission('/v1/asset-catalog/search', true);
//     // if (hasRole) {
//     //   this.searchClass("")
//     //   this.checkPermission();
//     // }
//   // }
//
//   // isAcceptBtn: any = {
//   //   isCreate: false,
//   //   isUpdate: false,
//   //   isDelete: false,
//   //   isUpdateStatus: false,
//   //   isExport: false,
//   //   isImport: false,
//   // }
//   // checkPermission() {
//     // if (this.accountService.checkPermission('/v1/asset-catalog/create')) {
//     //   this.isAcceptBtn.isCreate = true;
//     // }
//     // if (this.accountService.checkPermission('/v1/asset-catalog/{id}/update')) {
//     //   this.isAcceptBtn.isUpdate = true;
//     // }
//     // if (this.accountService.checkPermission('/v1/asset-catalog/delete')) {
//     //   this.isAcceptBtn.isDelete = true;
//     // }
//     // if (this.accountService.checkPermission('/v1/asset-catalog/{id}')) {
//     //   this.isAcceptBtn.isViewDetail = true;
//     // }
//   // }
//   // filterName: string = 'ALL ITEM'
//   // dataParse: any
//   // dataFilter: any
//   // public handleShowFilter() {
//   //   this.dialogService.open(FilterViewComponent, {
//   //     data: 'DCIM_ASSET_CATALOG_VIEW ',
//   //     header: "Saved view list",
//   //     style: { overflow: 'auto', resize: 'both' },
//   //     width: '900px',
//   //     height: '80vh',
//   //     modal: true
//   //   }).onClose.subscribe((data) => {
//   //     if (data) {
//   //       this.parseAndAssignData(data);
//   //     } else {
//   //       this.resetDataSearch();
//   //     }
//   //   });
//   // }
//   // private parseAndAssignData(data: any) {
//   //   const parsedData = JSON.parse(data.filterValues);
//   //   this.dataParse = parsedData;
//   //   this.dataFilter = data;
//   //   this.assignParsedDataToSearch();
//   //   this.filterName = data.filterName.toUpperCase();
//   //   // this.searchModel();
//   // }
//   // private assignParsedDataToSearch() {
//   //   for (const key in this.dataSearch) {
//   //     this.dataSearch[key] = this.dataParse?.[key];
//   //   }
//   // }
//   // private resetDataSearch() {
//   //   for (const key in this.dataSearch) {
//   //     this.dataSearch[key] = null;
//   //   }
//   //   this.filterName = 'ALL ITEM';
//   //   // this.searchModel()
//   // }
//   // public handleSaveFilter() {
//   //   this.confirmationService.confirm({
//   //     key: CONFIRM_DIALOG_TYPE.INFO,
//   //     acceptLabel: this.translation.instant("common.btn.confirm"),
//   //     defaultFocus: 'reject',
//   //     rejectLabel: this.translation.instant("common.btn.cancel"),
//   //     message: this.filterName == 'ALL TIME' ?
//   //       `<div class="message-content">${this.translation.instant("model_library.update.message")}?</div>` :
//   //       `<div class="message-content">${this.translation.instant("model_library.create.message")}?</div>`,
//   //     header: this.translation.instant("monitor.currentAlarm.delete.header"),
//   //     accept: () => {
//   //       if (this.filterName == 'ALL ITEM') {
//   //         this.handleCloneView();
//   //       } else {
//   //         this.updateFilter();
//   //       }
//   //     },
//   //     reject: (type: any) => {
//   //       this.spinnerService.hideSpinner();
//   //       console.log('on reject', type);
//   //     }
//   //   });
//   // }
//   // private handleCloneView() {
//   //   const prop = {
//   //     data: { userId: this.userId, userFunction: "DCIM_ASSET_CATALOG_VIEW", filterName: this.dataFilter?.filterName, filterValues: JSON.stringify(this.dataSearch) },
//   //     key: 'clone'
//   //   };
//   //   this.dialogService.open(FilterViewCloneComponent, {
//   //     data: prop,
//   //     header: "View Clone",
//   //     style: { overflow: 'auto', resize: 'both' },
//   //     width: '900px',
//   //     modal: true
//   //   }).onClose.subscribe((data) => {
//   //     if (data) {
//   //       this.spinnerService.hideSpinner();
//   //     }
//   //   });
//   // }
//   // private updateFilter() {
//   //   this.spinnerService.showSpinner();
//   //   const body = { id: this.dataFilter.id, userId: this.userId, userFunction: "DCIM_ASSET_CATALOG_VIEW", filterName: this.dataFilter.filterName, filterValues: JSON.stringify(this.dataSearch) };
//   //   this.filterSaverice.update(body).subscribe(res => {
//   //     if (res) {
//   //       this.appService.notifySuccess(this.translation.instant('common.update.success'));
//   //       this.spinnerService.hideSpinner();
//   //     }
//   //   }, (error) => {
//   //     this.spinnerService.hideSpinner();
//   //     this.appService.notifyError(error.message);
//   //   });
//   // }
//
//
//   // onPageChange(event: any) {
//   //
//   //   this.pageIndex = event.page - 1;
//   //   this.pageSize = event.rows;
//   //
//   //   // Phân trang local, phan trang server ko can xy ly doan nay
//   //   const offset = this.pageIndex * this.pageSize;
//   //   const currentData = this.products;
//   //   this.dataTable = currentData.slice(offset, offset + this.pageSize);
//   //   // this.searchModel()
//   // }
//
//   // Phân trang local
//   // paginatorDataTable() {
//   //   const offset = this.pageIndex * this.pageSize;
//   //   const currentData = this.products;
//   //   this.dataTable = currentData.slice(offset, offset + this.pageSize);
//   // }
//   //
//   // public updateChecker(event: any) {
//   //   if (event === 'check-all') {
//   //     this.selectedItems.forEach((item: any) => {
//   //       item.isShow = this.checkAll
//   //     })
//   //   } else {
//   //     for (let i = 0; i < this.selectedItems.length; i++) {
//   //       if (!this.selectedItems[i].isShow) {
//   //         this.checkAll = false
//   //         break
//   //       }
//   //       if (this.selectedItems[i].isShow) {
//   //         this.checkAll = true
//   //       }
//   //     }
//   //   }
//   // }
//
//   // public searchClass(event: any) {
//   //   this.assetClassSubClassService.searchClass({
//   //     "filter": event.query ? (event.query).trim() : null
//   //   }, 0, 10).subscribe((res: any) => {
//   //     if (res && res.data) {
//   //       this.listClass = res.data.content
//   //       this.dataSearch.class = this.dataParse?.class
//   //       // this.dataSearchModel.classCode = {name: 'A Hương test', code: 'Ser_test1234'}
//   //       // this.dataSearch.classCode = this.dataSearchModel.classCode.code
//   //       // this.searchModel();
//   //
//   //
//   //     }
//   //   })
//   // }
//
//   // public searchSubClass(event: any) {
//   //   // this.assetClassSubClassService.searchSubClass({
//   //     "name": event.query ? (event.query).trim() : null,
//   //     "assetClassId": this.dataSearch.classId
//   //   }, 0, 10).subscribe((res: any) => {
//   //     if (res && res.data) {
//   //       this.listSubClass = res.data.content
//   //     }
//   //   })
//   // }
//
//
//   // public searchModel() {
//   //   // this.spinnerService.showSpinner()
//   //   this.selectedData = []
//   //   this.spinnerService.showSpinner()
//   //   this.modelLibraryService.searchCatalog(this.dataSearch, this.pageIndex, this.pageSize, 'ASC').subscribe((res: any) => {
//   //     if (res && res.data) {
//   //       this.spinnerService.hideSpinner()
//   //       res.data.content.forEach((item: any) => {
//   //         item.updatedAt = item.updatedAt ? converDate(item.updatedAt) : ''
//   //       })
//   //       this.dataTable = res.data.content
//   //       this.totalElement = res.data.totalElements
//   //     } else {
//   //       this.appService.notifyError(res.message)
//   //       this.spinnerService.hideSpinner()
//   //     }
//   //   }, (errors: any) => {
//   //     this.spinnerService.hideSpinner()
//   //     if (errors.status === 0) {
//   //       this.appService.notifyError(this.translation.instant('message.systemError'))
//   //       return;
//   //     }
//   //     if (errors.error.data) {
//   //       this.appService.notifyError(convertTextMessage(errors.error.data.validateDetails))
//   //     } else {
//   //       this.appService.notifyError(errors.error.message)
//   //     }
//   //   })
//   // }
//
//   // public deleteCatalog(event: any) {
//   //   var body: any = []
//   //   if (!event?.id) {
//   //     this.selectedData.forEach((item: any) => {
//   //       body.push(item.id)
//   //     })
//   //   } else {
//   //     body = [event.id]
//   //   }
//   //   this.confirmationService.confirm({
//   //     key: CONFIRM_DIALOG_TYPE.ERROR,
//   //     header: "Delete Catalog",
//   //     acceptLabel: this.translation.instant("common.btn.delete"),
//   //     rejectLabel: this.translation.instant("common.btn.cancel"),
//   //     defaultFocus: 'reject',
//   //     message: `<div class="message-content">${this.translation.instant("message.deleteOne")} ${event ? event.name : this.selectedData.length + ' record'}</div>
//   //             <div class="title-confirm">${this.translation.instant("dialog.confirmTitleDelete")}</div>`,
//   //     accept: () => {
//   //       this.spinnerService.showSpinner()
//   //       this.modelLibraryService.deleteCatalog(body).subscribe((res: any) => {
//   //         if (res) {
//   //           this.searchModel()
//   //           this.appService.notifySuccess(this.translation.instant('message.deleteSuccess'))
//   //           this.spinnerService.hideSpinner()
//   //         }
//   //       }, (errors: any) => {
//   //         if (errors.error.data) {
//   //           this.appService.notifyError(convertTextMessage(errors.error.data.validateDetails))
//   //         } else {
//   //           this.appService.notifyError(errors.error.message)
//   //         }
//   //         this.spinnerService.hideSpinner()
//   //       })
//   //     },
//   //     reject: () => {
//   //
//   //     }
//   //   });
//   // }
//
//   // public importFile() {
//   //   this.showPopupImport = true
//   // }
//   // public importFileImg() {
//   //   this.showPopupImportImg = true
//   // }
// }
