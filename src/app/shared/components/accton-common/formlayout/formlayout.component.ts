import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiResponse, MyInterface } from 'src/app/shared/models/my-interface';
import { MyServiceService } from 'src/app/shared/services/my-service.service';

@Component({
  selector: 'app-formlayout',
  templateUrl: './formlayout.component.html',
  styleUrls: ['./formlayout.component.scss']
})
export class FormlayoutComponent {
    @Input() message: string ='Change';
    @Input() type: string = 'info';
    public form: FormGroup;

    constructor(private fb: FormBuilder,private conToAPI: MyServiceService) {
      this.form = this.fb.group({
        name: ['2'],
        email: ['2'],
        age: ['2'],
      });
    }

    user = {
        name: ''
      };

      onSubmit() {
        const userName = this.user.name;
        alert(`你输入的姓名是：${userName}`);
      }

      originalMydata: MyInterface[]=[];
      A:any[]=[];
      // originalMydata!: MyInterface[];


    Mydata: MyInterface[]=[];
    ngOnInit(): void {

      this.conToAPI.getData().subscribe(
        // next:(resp: MyInterface[])=>this.Mydata=resp

        (data: ApiResponse) => {
          this.Mydata = data.posts; // 將服務返回的數據賦值給組件的屬性
          this.originalMydata=cloneDeep(data.posts);
      });

    //   this.form = this.fb.group({});
    //   this.Mydata.forEach(item => {
    //     this.form.addControl(item.id, this.fb.control(item.value));
    //   });

    }


    messageOO!:String;


    showButtonA = true;
      showButtonB = false;
      showButtonC = false;

      toggleButtons(buttonClicked: string) {


        if (buttonClicked === 'A') {
          this.showButtonA = false;
          this.showButtonB = true;
          this.showButtonC = true;
        } else if (buttonClicked === 'B') {
          this.updateData();
          console.log('1')
          console.log('eeee:'+this.messageOO)

        //   if(this.messageOO=='false'){
        //     console.log(2)
        //     return;
        //   }
          this.showButtonA = true;
          this.showButtonB = false;
          this.showButtonC = false;
        }else if (buttonClicked === 'C') {
          this.showButtonA = true;
          this.showButtonB = false;
          this.showButtonC = false;
          this.cancelChanges();
        }
      }

      changes: any = {};

      trackChanges(field: string, value: any) {
        this.changes[field] = value;
      }

      updateData() {
        // if (Object.keys(this.changes).length > 0) {
        //   // 发送变化的数据到后端进行更新
        //   // 实现此部分的HTTP请求逻辑
        // }
        this.conToAPI.saveData(this.changes).subscribe(
          // next:(resp: MyInterface[])=>this.Mydata=resp

          (data: ApiResponse) => {
            this.Mydata = data.posts; // 將服務返回的數據賦值給組件的屬性
            this.messageOO=data.fr_status;
            console.log('YY:'+this.messageOO)
            this.originalMydata=cloneDeep(data.posts);
        });

      }
        // Mydata:any =this.;

        // Mydata = []; // 假设您的 Mydata 数据在这里
        // changes = []; // 假设您的 changes 数据在这里

        // ... 其他组件代码 ...


        cancelChanges() {

          // 将 Mydata 数组还原到之前的状态
          // 清空 changes 数组
          this.Mydata = cloneDeep(this.originalMydata); // 假设 originalMydata 包含之前的数据状态
          this.changes = {};
        }

}
function cloneDeep(posts: MyInterface[]): MyInterface[] {
    throw new Error('Function not implemented.');
}

