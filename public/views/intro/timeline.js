/**
 * MOBILE
 */

 // The html (without section)
 mobile_html = 
 `
 `
 
  // All listeners, one variable per listener
 mobile_listener1 = ["selector", "type", () => {
 
 }]
 
 mobile_listener2 = ["selector", "type", () => {
 
 }]
 /** And more... */
 
 // Socket on
 
 // Script to be executed when the page is displayed
 mobile_script = () => {
     
 }
 
 // Name of the transitions classes [when he leave, when he arrive]
 mobile_transition = ["out", "in"]
 
 /**
  * DESKTOP
  */
 
 desktop_html = 
 `
 <!----------- 
 ------------- TIMELINE
 ----------->

 <div class="Timeline">

    <div class="event1">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff; stroke-width:2" />
    </svg>



    <div class="event2">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff;stroke-width:2" />
    </svg>



    <div class="event3">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff;stroke-width:2" />
    </svg>



    <div class="event4">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff;stroke-width:2" />
    </svg>



    <div class="event5">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff;stroke-width:2" />
    </svg>



    <div class="event6">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff;stroke-width:2" />
    </svg>



    <div class="event7">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>
    <svg height="3" width="300">
    <line x1="0" y1="0" x2="300" y2="0" style="stroke:#ffffff;stroke-width:2" />
    </svg>



    <div class="event8">
    <svg height="18" width="10">
      <circle cx="5" cy="10" r="5" stroke="#ffffff" stroke-width="1" fill="#ffffff" fill-opacity="0" />
    </svg>
    </div>

 </div>
 <!----------- 
 ------------- FIN TIMELINE
 ----------->
 `
 
 desktop_listener1 = ["selector", "type", () => {
 
 }]
 
 desktop_listener2 = ["selector", "type", () => {
 
 }]
 
 desktop_script = () => {
    
 }
 
 desktop_transition = ["out", "in"]
 
 /**
  * Export
  */
 
timeline_mobile = {
     html: mobile_html,
     listeners: [],
     socketOn: [],
     script: mobile_script,
     transitions: mobile_transition,
 }
 
 timeline_desktop = {
     html: desktop_html,
     listeners: [],
     socketOn: [],
     script: desktop_script,
     transitions: desktop_transition,
 }
 