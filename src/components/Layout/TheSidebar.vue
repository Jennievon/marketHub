<template>
  <!--  BEGIN SIDEBAR  -->
  <div class="sidebar-wrapper sidebar-theme">
    <!-- :class="{
      'sidebar-expand sidebar-theme': showFullSidebar,
      'sidebar-collapse sidebar-theme': !showFullSidebar,
    }"
    @mouseenter="showFullSidebar"
    @mouseleave="!showFullSidebar" -->
    <nav id="sidebar">
      <ul class="navbar-nav theme-brand flex-row text-center">
        <li class="nav-item theme-logo">
          <a href="#">
            <img class="navbar-logo" src="/assets/img/MARKETHUB LOGO.png" alt />
          </a>
        </li>
      </ul>
      <ul class="list-unstyled menu-categories mt-4" id="accordionExample">
        <li class="menu active">
          <a
            href="/account/dashboard"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Dashboard</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/profile"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Profile</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/users"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Users</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/customers"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Customers</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/user-management"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">User Management</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/freshchat"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <span class="sidebar__text">Freshdesk/Freshchat</span>
            </div>
          </a>
        </li>
      </ul>

      <ul class="menu-category__fixed">
        <li>
          <a href="#" target="_blank" class="d-flex justify-content-center">
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!--  END SIDEBAR  -->
</template>

<script>
export default {
  data() {
    return {
      showFullSidebar: false,
    };
  },
};
</script>

<style>
.navbar-logo {
  width: 100% !important;
  height: auto !important;
  padding: 20px;
}
#sidebar li:hover > a,
nav#sidebar li.active > a {
  color: #fff;
  background-color: rgba(0, 98, 196, 0.06);
}
.sidebar-expand {
  box-shadow: none;
  border-right: 1px solid #e3e6ec;
  width: 235px;
  /* overflow: hidden; */
}
.sidebar-collapse {
  box-shadow: none;
  border-right: 1px solid #e3e6ec;
  width: 75px;
  /* overflow: hidden; */
}
</style>
