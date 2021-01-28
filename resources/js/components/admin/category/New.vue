<template>

     <div>

        <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Quick Example</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form" @click.prevent="addCategory()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control"  name="name" id="CategoryId" placeholder="Category Name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                  </div>
                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>


     </div>


 </template>
 <script>

   export default{
              name:"New",
              data(){
                     return{
                          form: new Form({
                            name: ''
        
                         
         })

                     }


              },
              methods:{

                  addCategory(){
                    this.form.post('/add-category')
                      .then((response)=>{
                          this.$router.push('/category-list')
                        toast({

                            type:'success',
                            title:'Category Added successfully'
                        })
                      })
                      .catch(()=>{




                      })



                 
                  }
              }


   }

 </script>