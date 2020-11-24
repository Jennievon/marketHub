<template>
  <!--  BEGIN NAVBAR  -->
  <div class="header-container fixed-top" style="margin-left: 16em">
    <header class="header navbar navbar-expand-sm">
      <a
        href="javascript:void(0);"
        class="sidebarCollapse"
        data-placement="bottom"
      >
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
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </a>

      <ul class="navbar-item flex-row">
        <li class="nav-item align-self-center page-heading">
          <div class="row">
            <div class>
              <v-select
                :options="[
                  { workspace_label: 'Primus Test Team' },
                  { workspace_label: 'Others' },
                  { workspace_label: 'Create Workspace' },
                ]"
                @keydown.enter.native.prevent
                label="workspace_label"
                class="v-select input-bordered"
                placeholder="Select Workspace"
                @input="checkWorkspaceLabel"
                v-model="workspace"
                style="background: #f5f5f5"
              ></v-select>
            </div>
          </div>
        </li>
      </ul>

      <ul class="navbar-item flex-row navbar-dropdown ml-md-auto">
        <li class="nav-item dropdown notification-dropdown">
          <a href="notifications.php" class="nav-link">
            <input
              class="form-control input-bordered"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style="background: #f5f5f5"
            />
            <img class="search-icon" src="/assets/img/search-icon.svg" alt />
            <!-- <span class="badge badge-success"></span> -->
          </a>
        </li>

        <li
          class="nav-item d-flex justify-content-center align-items-center ml-2"
        >
          <div class="user-avatar">
            <img src="/assets/img/mail-add-icon.svg" alt="" />
          </div>
        </li>

        <li
          class="nav-item d-flex justify-content-center align-items-center ml-2"
        >
          <div class="user-avatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1b55e2"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
        </li>

        <li
          class="nav-item d-flex justify-content-center align-items-center ml-2"
        >
          <button class="btn btn-md btn-orange">Upgrade</button>
        </li>

        <li
          class="nav-item d-flex justify-content-center dropdown user-profile-dropdown order-lg-0 order-1 ml-2"
        >
          <div
            style="display: flex; justify-content: center; align-items: center"
            id="userProfileDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <!-- <a
              href="javascript:void(0);"
              class="nav-link dropdown-toggle user-avatar"
              id="userProfileDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="padding: 5px 5px"
            > -->
            <img class="" src="/assets/img/user-img.png" alt="" />
            <!-- </a> -->
          </div>
          <div
            class="dropdown-menu position-absolute"
            aria-labelledby="userProfileDropdown"
          >
            <div class="user-info">
              <div class="user-details">
                <span class="user-name my-0" :title="workspace">{{
                  workspace
                }}</span>
              </div>
            </div>
            <div class>
              <div class="dropdown-item">
                <router-link to="/account" class="text-orange">
                  Upgrade
                </router-link>
              </div>
              <div class="dropdown-item">
                <router-link to="/logout"> Edit Profile</router-link>
              </div>
              <div
                class="dropdown-item dropleft"
                id="moreOptionsDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <a
                  href="javascript:void(0);"
                  class="nav-link d-flex justify-content-between align-items-center dropdown-toggle"
                >
                  More Options
                  <svg
                    width="5"
                    height="16"
                    viewBox="0 0 5 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 6L0.5 0.803848L0.5 11.1962L5 6Z"
                      fill="#666666"
                    />
                  </svg>
                </a>
              </div>
              <div
                class="dropdown-menu position-absolute"
                aria-labelledby="moreOptionsDropdown"
              >
                <div class="user-info">
                  <div class="user-details">
                    <span class="user-name my-0" :title="workspace">{{
                      workspace
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="dropdown-item">
                <router-link to="/logout"> Settings </router-link>
              </div>
              <div class="dropdown-item">
                <router-link to="/logout" class="text-orange">
                  Log Out
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </header>
  </div>
  <!--  END NAVBAR  -->

  <!--  BEGIN NAVBAR  -->
  <!-- <div class="sub-header-container">
      <header class="header navbar navbar-expand-sm">
        <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom">
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
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </a>

        <ul class="navbar-nav flex-row">
          <li>
            <div class="page-header">
              <div class="page-title">
                <h3>Blank Page</h3>
              </div>
            </div>
          </li>
        </ul>
      </header>
  </div>-->
  <!--  END NAVBAR  -->
</template>

<script>
export default {
  data() {
    return {
      workspace: "Primus Test Team",
    };
  },
  methods: {
    checkWorkspaceLabel() {
      if (this.workspace.workspace_label === "Create Workspace") {
        this.$router.push("/onboarding");
      }
    },
  },
};
</script>

<style scoped>
/* .form-control {
  padding: 1px 2px;
} */
.v-select.input-bordered.vs--single.vs--searchable
  .vs__dropdown-toggle
  div.vs__actions
  > button.vs__clear {
  display: none !important;
}
.btn-orange {
  background-color: #fab03b;
}
.text-orange {
  color: #fab03b !important;
}
.user-avatar {
  background-color: #f5f5f5;
  padding: 5px 5px;
  border-radius: 5px;
}
</style>
