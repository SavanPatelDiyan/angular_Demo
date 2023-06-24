import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {

  demoForm: FormGroup;
  demoAllList: any[] = [];
  DemoList: any[] = [];
  demoList: any[] = [];
  submittedDemoData: boolean = false;
  p = 1;
  l = 3;
  itemPerPage: any;
  pageNumberList: any[] = [];
  shortKey: any = 'name';
  shortDirection: any = 'desc';
  activeSortField = 'name';
  isEdit: boolean = false;
  editIndex: number;
  searchTerm: any;

  get fDemoData() { return (this.demoForm.controls) };


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemPerPage = this.l;
    this.defaultForm()
  }

  defaultForm() {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  saveData() {

    if (this.demoForm.invalid) {
      this.submittedDemoData = true;
      return
    }
    let demoObj = {
      name: this.demoForm.value.name,
      email: this.demoForm.value.email,
      phone: this.demoForm.value.phone,
    }
    this.demoAllList.push(demoObj);
    this.DemoList = this.demoAllList

    this.defaultForm();
    this.submittedDemoData = false;
    this.getPages();


    this.pageChange(1);

    this.sortingList();

  }

  getPages() {
    this.pageNumberList = []
    let pageCount = Math.ceil(this.demoAllList.length / this.l);
    for (let index = 0; index < pageCount; index++) {
      this.pageNumberList.push(index + 1)
    }
  }

  search() {

    let data = this.searchTerm.toLowerCase();
    const demoData = this.DemoList
    this.demoAllList = demoData.filter((x: any) => x.name.toLowerCase().includes(data));
    this.getPages();
    this.pageChange(1);
    this.sortingList();

  }

  pageChange(pageNumber: number) {

    this.demoList = []
    this.p = pageNumber;
    const startData = (this.p - 1) * this.l;
    const skipData = this.p * this.l;
    const skipArray = this.demoAllList
    this.demoList = skipArray.slice(startData, skipData);

  }

  sortData(event: any) {

    this.shortKey = event.target.id;

    if (this.shortKey === 'name') {
      if (this.activeSortField === 'name' && this.shortDirection && this.shortDirection === 'desc') {
        this.shortDirection = 'asc';
        this.sortingList();
        this.activeSortField = 'name';

      } else {
        this.shortDirection = 'desc';
        this.sortingList();
        this.activeSortField = 'name'
      }
    }
    else if (this.shortKey === 'phone') {
      if (this.activeSortField === 'phone' && this.shortDirection && this.shortDirection === 'desc') {
        this.shortDirection = 'asc';
        this.sortingList();
        this.activeSortField = 'phone'
      } else {
        this.shortDirection = 'desc';
        this.sortingList();
        this.activeSortField = 'phone'
      }
    }
    else if (this.shortKey === 'email') {
      if (this.activeSortField === 'email' && this.shortDirection && this.shortDirection === 'desc') {
        this.shortDirection = 'asc';
        this.sortingList();
        this.activeSortField = 'email'
      } else {
        this.shortDirection = 'desc';
        this.sortingList();
        this.activeSortField = 'email'
      }
    }
  }

  sortingList() {

    const data = this.demoAllList.slice();
    if (!this.shortKey || this.shortDirection === '') {
      this.demoAllList = data;
      return;
    }

    this.demoAllList = data.sort((a, b) => {
      const isAsc = this.shortDirection === 'asc';

      switch (this.shortKey) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'phone': return compare(a.phone, b.phone, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        default: return 0;
      }

    });

    this.getPages();

    this.pageChange(this.p);


  }

  deleteData(index: number) {
    const data = this.demoList[index];
    const index1 = this.demoAllList.indexOf(data);
    this.demoAllList.splice(index1, 1);
    this.demoList.splice(index, 1);
    this.getPages();
    if (this.demoList.length > 0) {
      this.pageChange(this.p)
    }
    else {
      this.pageChange(this.p - 1)
    }
  }

  editData(index: number) {
    this.isEdit = true;
    this.editIndex = index
    let data = this.demoList[index];
    this.demoForm.controls['name'].setValue(data.name);
    this.demoForm.controls['email'].setValue(data.email);
    this.demoForm.controls['phone'].setValue(data.phone);
  }

  updateData() {
    let UpdateObj = {
      name: this.demoForm.value.name,
      email: this.demoForm.value.email,
      phone: this.demoForm.value.phone,
    }
    this.demoList[this.editIndex] = UpdateObj;
    this.defaultForm();
    this.submittedDemoData = false;
    this.isEdit = false
  }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}