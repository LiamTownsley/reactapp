import './NavBar.css';

function NavBar(props) {
  return (
    <div class="topbar">
    <nav class="navbar">
    <ul class="navbar-nav">
      <li class="logo">
        <a href="./index.html" class="nav-link">
          <span class="link-text">PC PARTS</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary"
              ></path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary"
              ></path>
            </g>
          </svg>
        </a>
      </li>
      <li class="nav-item">
        <a href="./index.html" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 464.509">
            <path id="home" d="M512,295.222,256,96.509,0,295.223V214.2L256,15.491,512,214.205ZM448,288V480H320V352H192V480H64V288L256,144Z" transform="translate(0 -15.491)"/>
          </svg>
          
          <span class="link-text">Home</span>
          
        </a>
      </li>

      <li class="nav-item">
        <a href="./index.html" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 352">
            <g id="email" transform="translate(0 -80)">
              <g id="Group_4" data-name="Group 4">
                <g id="Group_3" data-name="Group 3">
                  <path id="Path_5" data-name="Path 5" d="M339.392,258.624,512,367.744V144.9Z"/>
                </g>
              </g>
              <g id="Group_6" data-name="Group 6">
                <g id="Group_5" data-name="Group 5">
                  <path id="Path_6" data-name="Path 6" d="M0,144.9V367.744l172.608-109.12Z"/>
                </g>
              </g>
              <g id="Group_8" data-name="Group 8">
                <g id="Group_7" data-name="Group 7">
                  <path id="Path_7" data-name="Path 7" d="M480,80H32C16.032,80,3.36,91.9.96,107.232L256,275.264,511.04,107.232C508.64,91.9,495.968,80,480,80Z"/>
                </g>
              </g>
              <g id="Group_10" data-name="Group 10">
                <g id="Group_9" data-name="Group 9">
                  <path id="Path_8" data-name="Path 8" d="M310.08,277.952,264.8,307.776a16.068,16.068,0,0,1-17.6,0L201.92,277.92,1.024,404.992C3.488,420.192,16.1,432,32,432H480c15.9,0,28.512-11.808,30.976-27.008Z"/>
                </g>
              </g>
            </g>
          </svg>
          
          
          
          <span class="link-text">Contact Us</span>
          
        </a>
      </li>

      <li class="nav-item">
        <a href="./index.html" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410.624 424.451">
            <g id="shopping-cart" transform="translate(-6.913 0.001)">
              <g id="Group_12" data-name="Group 12">
                <g id="Group_11" data-name="Group 11">
                  <circle id="Ellipse_1" data-name="Ellipse 1" cx="50.176" cy="50.176" r="50.176" transform="translate(120.065 324.097)"/>
                  <path id="Path_9" data-name="Path 9" d="M316.673,324.1h0a50.176,50.176,0,1,0,50.176,50.176A50.177,50.177,0,0,0,316.673,324.1Z"/>
                  <path id="Path_10" data-name="Path 10" d="M402.177,272.9H140.545l-5.12-29.7h215.04a15.36,15.36,0,0,0,14.336-9.728L416,104.449a15.36,15.36,0,0,0-14.336-20.992H108.8L96.513,12.8A15.36,15.36,0,0,0,81.153,0H22.273a15.36,15.36,0,0,0,0,30.72h46.08l44.032,260.1a15.36,15.36,0,0,0,15.36,12.8H402.177a15.36,15.36,0,0,0,0-30.72Z"/>
                </g>
              </g>
            </g>
          </svg>
          
          
          <span class="link-text">Shop</span>
          
        </a>
        </li>

        <li class="nav-item">
          <a href="./sign-in.html" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.164 512.004">
              <g id="user" transform="translate(0 0)">
                <path id="Path_9" data-name="Path 9" d="M210.352,246.633c33.883,0,63.223-12.152,87.2-36.129s36.125-53.3,36.125-87.191S321.52,60.1,297.543,36.121,244.231,0,210.352,0s-63.219,12.152-87.191,36.125S87.032,89.434,87.032,123.313s12.156,63.223,36.133,87.2,53.313,36.125,87.188,36.125Zm0,0"/>
                <path id="Path_10" data-name="Path 10" d="M426.129,393.7a304.594,304.594,0,0,0-4.148-32.352,254.893,254.893,0,0,0-7.957-32.527,160.661,160.661,0,0,0-13.371-30.336,114.475,114.475,0,0,0-20.164-26.277,88.9,88.9,0,0,0-28.965-18.2,100.1,100.1,0,0,0-36.977-6.691c-5.227,0-10.281,2.145-20.043,8.5-6.008,3.918-13.035,8.449-20.879,13.461-6.707,4.273-15.793,8.277-27.016,11.9a104.905,104.905,0,0,1-66.086,0c-11.211-3.621-20.3-7.625-27-11.9-7.77-4.965-14.8-9.5-20.9-13.469-9.75-6.355-14.809-8.5-20.035-8.5a99.975,99.975,0,0,0-36.973,6.7,88.828,88.828,0,0,0-28.969,18.2A114.491,114.491,0,0,0,26.5,298.488a160.977,160.977,0,0,0-13.371,30.34,255.5,255.5,0,0,0-7.953,32.523,303.521,303.521,0,0,0-4.148,32.363C.344,403.512,0,413.679,0,423.949c0,26.727,8.5,48.363,25.25,64.32C41.8,504.015,63.691,512,90.316,512H336.847c26.625,0,48.512-7.984,65.063-23.734,16.758-15.945,25.254-37.586,25.254-64.324,0-10.316-.352-20.492-1.035-30.242Zm0,0"/>
              </g>
            </svg>            
            
            <span class="link-text">Sign In</span>
            
          </a>
        </li>
    </ul>
  </nav>
  <div class="header">
      <h1>{props.name}</h1>
  </div>
    </div>
  );
}

export default NavBar;