<template>
  <div style='width: 700px; margin: auto; padding-top: 50px;'>
    <nav>
      <!-- <router-link>タグではサーバーにアクセスする必要なし -->
      <router-link to='/' 
                   class='link'
                   active-class='link--active'
                   exact
      >Home</router-link>
      <router-link to='/profile' 
                   class='link'
                   active-class='link--active'
                   exact
      >Profile</router-link>
      <router-link to='/service/1' 
                   class='link'
                   active-class='link--active'
                   exact
      >Service</router-link>
      <router-link to='/signin' 
                   class='link'
                   active-class='link--active'
                   exact
      >SignIN</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scope>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 30px;
  }
</style>
