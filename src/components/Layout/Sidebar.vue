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
            <img class="navbar-logo" src="/assets/img/primus-logo.svg" alt />
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
              <img class="mr-3" src="/assets/img/home-icon.svg" alt="" />
              <span class="sidebar__text">Dashboard</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/projects"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <img class="mr-3" src="/assets/img/projects-icon.svg" alt="" />
              <span class="sidebar__text">Projects</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/tasks-order"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <img class="mr-3" src="/assets/img/tasks-icon.svg" alt="" />
              <span class="sidebar__text">Task Order</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a href="/account/team" aria-expanded="false" class="dropdown-toggle">
            <div class>
              <img class="mr-3" src="/assets/img/users-icon.svg" alt="" />
              <span class="sidebar__text">Team</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/calendar"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <img class="mr-3" src="/assets/img/calendar-icon.svg" alt="" />
              <span class="sidebar__text">Calendar</span>
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
              <img class="mr-3" src="/assets/img/user-icon.svg" alt="" />
              <span class="sidebar__text">Profile</span>
            </div>
          </a>
        </li>

        <li class="menu">
          <a
            href="/account/settings"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <div class>
              <img class="mr-3" src="/assets/img/settings-icon.svg" alt="" />
              <span class="sidebar__text">Settings</span>
            </div>
          </a>
        </li>
      </ul>

      <ul class="menu-category__fixed">
        <li>
          <a href="#" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
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
    return {};
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
</style>
