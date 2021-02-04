(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{642:function(e){e.exports=JSON.parse('{"routes.home":"Home","routes.user_manager":"User Manager","routes.login":"Log In","routes.admin":"Administration","routes.admin.update":"TGS Update","routes.admin.logs":"TGS Logs","routes.config":"Configuration","routes.passwd":"Change Password","routes.usermanager":"Users","routes.useredit":"User Editor","routes.usercreate":"Create User","routes.instancelist":"Instances","routes.instancecreate":"Add New Instance","routes.instancecode":"Code","routes.instancehosting":"Hosting","routes.instanceconfig":"Configuration","routes.instancejobs":"Jobs","routes.setup":"PostInstall Setup","routes.info":"Info","login.oauth":"Sign in with {provider}","login.submit":"Login","login.password":"Password","login.password.repeat":"Confirm Password","login.password.repeat.match":"Passwords do not match!","login.password.repeat.short":"Password is too short! It must have a length of atleast ","login.title":"Login","login.username":"Username","navbar.user_error":"Error loading current user","navbar.server_error":"Error loading server information","navbar.home":"Home","navbar.purgecache":"Purge Client Cache","navbar.refresh":"Refresh","navbar.logout":"Logout","app.job.started":"Started: ","app.job.startedby":"Started By: ","app.job.stopped":"Stopped: ","app.job.stoppedby":"Stopped By: ","error.http.access_denied.desc":"Access to this resource is denied","error.unhandled_response.desc":"The application received an unexpected response","error.unhandled_global_response.desc":"The application received an unexpected global response","error.login.no_creds.desc":"Attempted to login without any credentials","error.login.bad_oauth":"An error occurred while logging in using OAuth","error.login.bad_user_pass.desc":"Invalid credentials!","error.login.user_disabled.desc":"This user account is disabled","error.user.no_sys_ident.desc":"This system user was not found","error.user.not_found.desc":"This TGS user was not found","error.http.bad_request":"BUG: Bad Request","error.http.data_integrity":"A data integrity check failed while performing the operation","error.http.api_mismatch":"API version mismatch","error.http.server_error":"BUG: Server error","error.http.unimplemented":"This feature is unimplemented.","error.http.server_not_ready":"The server is still starting/stoping!","error.http.access_denied":"Access denied","error.http.not_acceptable":"BUG: The server has found the request to be unacceptable.","error.axios":"Axios error","error.unhandled_response":"The application received an unexpected response","error.unhandled_global_response":"The application received an unexpected global response","error.login.no_creds":"Attempted to login without any credentials","error.login.bad_user_pass":"Invalid credentials!","error.login.user_disabled":"This user account is disabled","error.login.rate_limit":"Failed to login using external provider due to rate limiting. Please try again later","error.user.no_sys_ident":"This system user was not found","error.user.not_found":"This TGS user was not found","error.group.not_found":"The requested group cannot be found.","error.group.not_empty":"The requested group cannot be deleted as it contains users.","error.admin.rate":"The server has exceeded github\'s rate limiting. Please try again later.","error.admin.error":"The server has ran into an error while using github\'s API.","error.admin.watchdog.avail":"This operation is unavailable due to the launch configuration of TGS.","error.admin.update.notfound":"This TGS version does not seem to exist.","error.admin.logs.io":"An IO error occured while processing logs","error.somethingwentwrong":"Uh oh.... Something went wrong!","error.notfound":"This page has not been found!","error.github":"An error occured while interacting with the Github API","error.app":"An error occured in the application","error.job.not_found":"The specified job could not be found","error.job.complete":"Unable to delete the job, perhaps it already completed","error.transfer.not_available":"Unable to transfer file as it is no longer or never was valid","error.instance.no_db_entity":"The database entity for the requested instance could not be retrieved. The instance was likely detached","error.api.empty":"No description available","error.no_apipath":"No API path set, set an API path on the configuration page.","generic.save":"Save","generic.savepage":"Save Page","generic.saveall":"Save All","generic.details":"Details","generic.debugwarn":"Be careful to censor out any credentials or tokens when copying errors!","generic.close":"Close","generic.goback":"Go Back","generic.accessdenied":"This user does not have access to this page. ","generic.persist":"Persist","generic.continue":"Continue","generic.view":"View","generic.download":"Download","generic.name":"Name","generic.datetime":"Date/Time","generic.entry":"Entry","generic.action":"Action","generic.createdby":"Created By","generic.created":"Created","generic.disabled":"Disabled","generic.enabled":"Enabled","generic.grouped":"Grouped","generic.tgs":"TGS","generic.group":"Group","generic.groupid":"Group ID {id}","generic.info":"Info","generic.system.short":"SYSTEM","generic.edit":"Edit","generic.systemidentifier":"System Identifier","generic.appname":"tgstation-server","generic.userid":"User ID ","generic.numusers":"{count} Users","generic.setall":"Set all","generic.true":"True","generic.false":"False","generic.reset":"Reset","generic.disable":"Disable","generic.enable":"Enable","generic.configmode":"Configuration Mode","generic.online":"Online","generic.offline":"Offline","generic.path":"Path","generic.select":"Select","generic.instance":"Instance","generic.wip":"Work In Progress!","generic.wip.desc":"The TGS webpanel is still a work in progress. The feature you are trying to use is not yet available. Until it becomes available, please use the TGS desktop client at ","view.setup.navigationblock":"Navigation has been disabled for the duration of the setup.","view.setup.title":"Step By Step Setup Wizard","view.setup.quit":"Quit Setup","view.setup.quitconfirm":"Are you sure you want to exit the setup? You will not be able to return.","view.setup.disableadmin":"Disable default Admin account","view.setup.nextpage":"Next Page","view.setup.step.1":"Step 1. Create yourself a user account","view.setup.step.2":"Step 2. Login using your new user account","view.setup.step.3":"Step 3. Disable the default Admin account","view.setup.step.4":"Step 4. Configure clientside settings (Optional)","view.setup.step.5":"Setup Complete!","view.admin.hostos":"Host Machine OS: ","view.admin.remote":"Remote repository: ","view.admin.version.current":"Current Version: ","view.admin.version.latest":"Latest Version: ","view.admin.reboot.button":"Restart TGS","view.admin.reboot.modal.title":"Confirmation","view.admin.reboot.modal.body":"Are you sure you wish to restart TGS?","view.admin.update.button":"Update TGS","view.admin.update.selectversion":"Select Version","view.admin.update.latest":" (Latest)","view.admin.update.current":" (Current)","view.admin.update.releasenotes":"Release Notes","view.admin.update.wait":"Please take the time to read the release notes before proceeding","view.admin.update.showall":"Show all versions","view.admin.logs.button":"TGS Logs","view.user.list.cantlist":"This user does not have the permission to list users, only the current user is listed/editable.","view.user.edit.cantedit":"This user does not have the permission to edit users.","view.user.edit.oauth.connections":"OAuth Connections","view.user.edit.oauth.current":"OAuth 2.0 Connections","view.user.edit.oauth.add":"Add Connection","view.user.edit.oauth.id":"Service User ID:","view.user.edit.oauth.provider":"Provider","view.user.edit.oauth.provider.discord":"Discord","view.user.edit.oauth.provider.github":"GitHub","view.user.edit.oauth.provider.tgforums":"/tg/ Forums","view.user.edit.oauth.provider.keycloak":"Keycloak","view.user.passwd.title":"Editing password for ","view.user.create.tgs":"Create user with TGS identifier","view.user.create.sys":"Create user with system identifier","view.instance.create.loading":"Creating Instance...","view.instance.create.title":"New Instance","view.instance.create.name":"Name","view.instance.create.path":"Path on Server","view.instance.create.path.prefix":"Prefix:","view.instance.create.submit":"Create Instance","view.instance.list.title":"Instance List","view.instance.list.set.online":"Set Online","view.instance.list.set.offline":"Set Offline","view.instance.configmode.0":"Disabled","view.instance.configmode.1":"Authorized users can read/write","view.instance.configmode.2":"Authorized users can read/write using their system user","view.instance.jobs.title":"Job list","view.instance.jobs.error":"An error occured","view.instance.moving":"[MOVING INSTANCE...]","view.instance.config.instancesettings":"Instance Settings","view.instance.config.instanceusers":"Instance Users","view.instance.config.chatbots":"Chat Bots","view.instance.config.noinstance":"No instance. Perhaps an error occured.","view.info.client":"Client Info","view.info.server":"Server Info","view.info.swarm":"Swarm Info","view.info.controller":"[CONTROLLER]","view.info.version":"Version: ","view.info.httpapiversion":"HTTP API Version: ","view.info.dmapiversion":"DM API Version: ","view.info.minpassword":"Minimum Password Length: ","view.info.instancelimit":"Instance Limit: ","view.info.userlimit":"User Limit: ","view.info.grouplimit":"Group Limit: ","view.info.oauth":"OAuth Support: ","perms.admin":"Administration Permissions","perms.admin.writeusers":"Edit Users","perms.admin.writeusers.desc":"Ability to edit users, if View Users is granted, all users can be edited, otherwise, only the current user can be edited","perms.admin.restarthost":"Restart TGS","perms.admin.restarthost.desc":"Ability to restart TGS","perms.admin.changeversion":"Update TGS","perms.admin.changeversion.desc":"Abilty to update TGS to a newer version","perms.admin.editownpassword":"Change Own Password","perms.admin.editownpassword.desc":"Ability to change their own password","perms.admin.readusers":"View Users","perms.admin.readusers.desc":"Ability to view all users","perms.admin.downloadlogs":"Access TGS logs","perms.admin.downloadlogs.desc":"Ability to view and download all TGS logs","perms.admin.editownoauthconnections":"Edit own external identity providers","perms.admin.editownoauthconnections.desc":"Ability to edit their own identity providers(oauth)","perms.instance":"Instance Manager Permissions","perms.instance.read":"Read Accessible Instances","perms.instance.read.desc":"Ability to list and view instances the user is allowed access to. WARNING: Users who know the instance ID can still use the API to edit it using other permissions even if they lack this one.","perms.instance.create":"Create Instances","perms.instance.create.warning":"The current user is not permitted to create instances","perms.instance.create.desc":"Ability to create new instances","perms.instance.rename":"Rename Instances","perms.instance.rename.desc":"Ability to rename instances","perms.instance.relocate":"Relocate Instances","perms.instance.relocate.desc":"Ablity to change the location of an instance on the file system","perms.instance.setonline":"Change Instance Online Status","perms.instance.setonline.desc":"Ability to set an instance as online or offline","perms.instance.delete":"Delete Instance","perms.instance.delete.desc":"Ablity to delete an instance","perms.instance.list":"Read All Instances","perms.instance.list.desc":"Ability to list and view all instances","perms.instance.setconfiguration":"Set Instance Configuration Mode","perms.instance.setconfiguration.desc":"Ability to set an instance\'s static file editing mode","perms.instance.setautoupdate":"Set Instance Autoupdate Interval","perms.instance.setautoupdate.desc":"Ability to set an instance\'s interval for automatic code updates","perms.instance.setchatbotlimit":"Set Instance Chatbot Limit","perms.instance.setchatbotlimit.desc":"Ability to change an instance\'s maximum amounts of bots","perms.instance.grantpermissions":"Grant All Permissions","perms.instance.grantpermissions.desc":"Ability to grant themselves all permissions on any instance","perms.group":"Group","perms.group.create":"Create Group","perms.group.warning":"This user is linked to the \\"{group}\\" group. Any change to the permissions will be applied to the group.","perms.group.delete.warning":"This group contains more than 0 users. Remove all users before deleting the group.","perms.group.none":"No group","perms.group.current":"Current Group: ","perms.group.cantlist":"You lack the permission to list all users. You need it to be able to list all groups","config.githubtoken":"Github token","config.githubtoken.desc":"You can supply a private authorization token for github to bypass some rate limiting on the github API.","config.apipath":"TGS API Path","config.apipath.desc":"Sets the API client server\'s path.","config.jobpollinactive":"Inactive job poll delay (s)","config.jobpollinactive.desc":"After how many seconds should we check for new jobs if we dont have any active jobs","config.jobpollactive":"Active job poll delay (s)","config.jobpollactive.desc":"After how many seconds should we check for new jobs if we know about a job","config.jobswidgetdisplay":"Jobs Widget Display","config.jobswidgetdisplay.desc":"Display mode for the instance jobs widget","config.jobswidgetdisplay.enum.always":"Always display","config.jobswidgetdisplay.enum.auto":"Display when there are jobs","config.jobswidgetdisplay.enum.never":"Never display","loading.login":"Logging in...","loading.page":"Loading page: ","loading.page.notfound":"Loading page: NotFound","loading.app":"Loading app...","loading.admin":"Loading admin info...","loading.version":"Loading versions...","loading.updating":"Updating server...","loading.logs":"Loading Log(s)...","loading.info":"Loading Information...","loading.passwd":"Changing password...","loading.userlist":"Loading user list...","loading.user.load":"Loading user information...","loading.user.save":"Saving user information...","loading.user.create":"Creating user...","loading.instance.list":"Loading instance list...","loading.instance.jobs.list":"Loading job list...","loading.instance":"Loading instance...","fields.instance.name":"Instance Name","fields.instance.path":"Path on disk","fields.instance.chatbotlimit":"Max chatbots","fields.instance.filemode":"Static File Edit Mode","fields.instance.autoupdate":"Autoupdate Interval in minutes (0 to disable)","fields.instance.filemode.Disallowed":"No File Management.","fields.instance.filemode.HostWrite":"Logged in users can edit any file.","fields.instance.filemode.SystemIdentityWrite":"Users using a system identity can edit files their user has access to."}')}}]);
//# sourceMappingURL=28.dbc91575de2c74a4f7ab.js.map