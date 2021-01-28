<template>
      <div>
        <h2>Category List</h2>
        <div class="add">
           <router-link  to="/category-add" class="btn btn-success"><p> add Category</p></router-link>
        </div>
        <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>SL</th>
                    <th>Category Name </th>
                     <th>date </th>
                    
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr  v-for="(category,index) in getallCategory" :key="category.id">
                    <td>{{index+1}}</td>
                    <td>{{category.name}} </td>
                    <td>{{category.created_at | timeformat}} </td>
                   
                    <td
                        
                        <router-link :to="`/edit-category/${category.id}`"> edit</router-link>
                        <a href="" @click.prevent="deleteCategory(category.id)"> Delete</a>

                    </td>
                    
                  </tr>
                  
                  
                  </tbody>
                 
                </table>


      </div>



</template>

<script>
 export default{

       name:"List",

       mounted(){
           this.$store.dispatch("allCategory")
       },
       computed:{
            getallCategory(){
               return this.$store.getters.getCategory
            }
            
       },
       methods:{

               deleteCategory(id){
                    axios.get('/category/'+id)
                       .then(()=>{
                               this.$store.dispatch("allCategory")
                            toast({

                            type:'success',
                            title:'Category Deleted successfully'
                        })
                       })
                       .catch(()=>{


                       })

               }
       }





 }


</script>