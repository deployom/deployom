/*
 * The MIT License
 *
 * Copyright (c) 2014 DeployOM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
$(function() {

    $("#addReleaseDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // Check Release Name
                if ($('#addReleaseReleaseName').val() === "") {
                    alert('Please enter Release Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Config/addRelease",
                    type: "POST",
                    data: $("#addReleaseForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        location.reload();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeReleaseDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Config/removeRelease",
                    type: "POST",
                    data: $("#removeReleaseForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        location.reload();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#uploadReleaseDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Upload: function() {
                $("#uploadReleaseForm").submit();
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addFlowDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                if ($('#addFlowName').val() === "") {
                    alert('Please enter Flow Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addFlow",
                    type: "POST",
                    data: $("#addFlowForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addFlowReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeFlowDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeFlow",
                    type: "POST",
                    data: $("#removeFlowForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeFlowReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeJobDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeJob",
                    type: "POST",
                    data: $("#removeJobForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeJobReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeConnectionDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeConnection",
                    type: "POST",
                    data: $("#removeConnectionForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeConnectionReleaseName').val() + '_CONNECTIONS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addJobDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                if ($('#addJobName').val() === "") {
                    alert('Please enter Job Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addJob",
                    type: "POST",
                    data: $("#addJobForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addJobReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addConnectionDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                if ($('#addConnectionName').val() === "") {
                    alert('Please enter Connection Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addConnection",
                    type: "POST",
                    data: $("#addConnectionForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addConnectionReleaseName').val() + '_CONNECTIONS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addFlowHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addFlowHost",
                    type: "POST",
                    data: $("#addFlowHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addFlowHostReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addSiteHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addSiteHost",
                    type: "POST",
                    data: $("#addSiteHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addSiteHostReleaseName').val() + '_SITE').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateFlowHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateFlowHost",
                    type: "POST",
                    data: $("#updateFlowHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateFlowHostReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#renameFlowHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Rename: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/renameFlowHost",
                    type: "POST",
                    data: $("#renameFlowHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#renameFlowHostReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateSiteHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateSiteHost",
                    type: "POST",
                    data: $("#updateSiteHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateSiteHostReleaseName').val() + '_SITE').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateJobHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateJobHost",
                    type: "POST",
                    data: $("#updateJobHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateJobHostReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addJobHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addJobHost",
                    type: "POST",
                    data: $("#addJobHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addJobHostReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addFlowServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addFlowService",
                    type: "POST",
                    data: $("#addFlowServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addFlowServiceReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addSiteServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addSiteService",
                    type: "POST",
                    data: $("#addSiteServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addSiteServiceReleaseName').val() + '_SITE').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeFlowServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeFlowService",
                    type: "POST",
                    data: $("#removeFlowServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeFlowServiceReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeSiteServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeSiteService",
                    type: "POST",
                    data: $("#removeSiteServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeSiteServiceReleaseName').val() + '_SITE').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addJobServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addJobService",
                    type: "POST",
                    data: $("#addJobServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addJobServiceReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeJobServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeJobService",
                    type: "POST",
                    data: $("#removeJobServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeJobServiceReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addJobCommandDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addJobCommand",
                    type: "POST",
                    data: $("#addJobCommandForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addJobCommandReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeJobCommandDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeJobCommand",
                    type: "POST",
                    data: $("#removeJobCommandForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeJobCommandReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeFlowHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeFlowHost",
                    type: "POST",
                    data: $("#removeFlowHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeFlowHostReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeSiteHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeSiteHost",
                    type: "POST",
                    data: $("#removeSiteHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeSiteHostReleaseName').val() + '_SITE').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeJobHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeJobHost",
                    type: "POST",
                    data: $("#removeJobHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeJobHostReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateJobDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateJob",
                    type: "POST",
                    data: $("#updateJobForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateJobReleaseName').val() + '_JOBS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateFlowDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateFlow",
                    type: "POST",
                    data: $("#updateFlowForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateFlowReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#renameFlowDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Rename: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/renameFlow",
                    type: "POST",
                    data: $("#renameFlowForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#renameFlowReleaseName').val() + '_FLOWS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateConnectionDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateConnection",
                    type: "POST",
                    data: $("#updateConnectionForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateConnectionReleaseName').val() + '_CONNECTIONS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addHostDialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Add: function() {
                if ($('#addHostType').val() === "") {
                    alert('Please enter Host Type');
                    return false;
                }

                if ($('#addHostLogin').val() === "") {
                    alert('Please enter Host Login');
                    return false;
                }

                if ($('#addHostPassword').val() === "") {
                    alert('Please enter Host Password');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addHost",
                    type: "POST",
                    data: $("#addHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addHostReleaseName').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateServicePasswordDialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Update: function() {

                if ($('#updateServicePasswordLogin').val() === "") {
                    alert('Please enter Host Login');
                    return false;
                }

                if ($('#updateServicePasswordOld').val() === "") {
                    alert('Please enter Host Password');
                    return false;
                }

                if ($('#updateServicePasswordNew').val() === "") {
                    alert('Please enter Host Password');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateServicePassword",
                    type: "POST",
                    data: $("#updateServicePasswordForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        location.reload();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateCommandPasswordDialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Update: function() {

                if ($('#updateCommandPasswordLogin').val() === "") {
                    alert('Please enter Host Login');
                    return false;
                }

                if ($('#updateCommandPasswordOld').val() === "") {
                    alert('Please enter Host Password');
                    return false;
                }

                if ($('#updateCommandPasswordNew').val() === "") {
                    alert('Please enter Host Password');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateCommandPassword",
                    type: "POST",
                    data: $("#updateCommandPasswordForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        location.reload();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeHost",
                    type: "POST",
                    data: $("#removeHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeHostReleaseName').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#renameHostDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Rename: function() {

                if ($('#renameHostNewHostName').val() === "") {
                    alert('Please enter New Host Type');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/renameHost",
                    type: "POST",
                    data: $("#renameHostForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#renameHostReleaseName').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addService",
                    type: "POST",
                    data: $("#addServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addServiceHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                if ($('#updateServicePassword').val() === "") {
                    alert('Please enter Service Password');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateService",
                    type: "POST",
                    data: $("#updateServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateServiceHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#replaceServiceCommandsDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Replace: function() {

                if ($('#replaceServiceCommandsMatch').val() === "") {
                    alert('Please enter Match string');
                    return false;
                }

                if ($('#replaceServiceCommandsReplace').val() === "") {
                    alert('Please enter Replace string');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/replaceServiceCommands",
                    type: "POST",
                    data: $("#replaceServiceCommandsForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#replaceServiceCommandsHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#transferServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Transfer: function() {

                if ($('#transferServiceNewHostTepe').val() === "") {
                    alert('Please enter New Host Type');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/transferService",
                    type: "POST",
                    data: $("#transferServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#transferServiceHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#copyServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Copy: function() {

                if ($('#copyServiceNewHostType').val() === "") {
                    alert('Please enter Copy Host Type');
                    return false;
                }

                if ($('#copyServiceNewServiceName').val() === "") {
                    alert('Please enter Copy Service Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/copyService",
                    type: "POST",
                    data: $("#copyServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#copyServiceHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#renameServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Rename: function() {

                if ($('#renameServiceNewServiceName').val() === "") {
                    alert('Please enter New Service Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/renameService",
                    type: "POST",
                    data: $("#renameServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#renameServiceHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addServiceLinkDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Add: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addServiceLink",
                    type: "POST",
                    data: $("#addServiceLinkForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addServiceLinkHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeServiceDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeService",
                    type: "POST",
                    data: $("#removeServiceForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeServiceHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addCommandDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Add: function() {

                if ($('#addCommandId').val() === "") {
                    alert('Please enter Command Id');
                    return false;
                }

                if ($('#addCommandTitle').val() === "") {
                    alert('Please enter Command Title');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addServiceCommand",
                    type: "POST",
                    data: $("#addCommandForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addCommandHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addChartDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Add: function() {

                if ($('#addChartId').val() === "") {
                    alert('Please enter Chart Id');
                    return false;
                }

                if ($('#addChartTitle').val() === "") {
                    alert('Please enter Chart Title');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addServiceChart",
                    type: "POST",
                    data: $("#addChartForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addChartHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#addModuleDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Add: function() {

                if ($('#addModuleName').val() === "") {
                    alert('Please enter Module Name');
                    return false;
                }

                // AJAX
                $.ajax({
                    url: "/jersey/Release/addServiceModule",
                    type: "POST",
                    data: $("#addModuleForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#addModuleReleaseName').val() + '_MODULES').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateCommandDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateServiceCommand",
                    type: "POST",
                    data: $("#updateCommandForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateCommandHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateChartDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateServiceChart",
                    type: "POST",
                    data: $("#updateChartForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateChartReleaseName').val() + '_CHARTS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#updateModuleDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 600,
        buttons: {
            Update: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/updateServiceModule",
                    type: "POST",
                    data: $("#updateModuleForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#updateModuleReleaseName').val() + '_MODULES').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeCommandDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeServiceCommand",
                    type: "POST",
                    data: $("#removeCommandForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeCommandHostType').val()).click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeChartDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeServiceChart",
                    type: "POST",
                    data: $("#removeChartForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeChartReleaseName').val() + '_CHARTS').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#removeModuleDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            Remove: function() {

                // AJAX
                $.ajax({
                    url: "/jersey/Release/removeServiceModule",
                    type: "POST",
                    data: $("#removeModuleForm").serialize(),
                    error: function() {
                        notificationMessage(LANG.submitError);
                    },
                    complete: function(data) {
                        $('#A_' + $('#removeModuleReleaseName').val() + '_MODULES').click();
                    }
                });

                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });
});

function afterLogin(config, role) {

    // Set designer
    $('#designer').button({icons: {primary: "deployom-designer"}}).click(function(event) {
        location.replace('/designer');
    });

    // Administrative access is required
    if (role !== "admin") {
        alert(LANG.authAdmin);
        return $('<div/>', {text: LANG.accessDenied});
    }

    // Release Tabs
    var ul = $('<ul/>');

    // Set OnChange
    $("#copyServiceNewReleaseName").change(function() {
        var button = this;

        // Clear List
        $('#copyServiceNewHostType').empty();

        // If Release Name not found
        if ($(button).val() === "") {
            alert('Please choose Release Name');
            return false;
        }

        // Open Release
        $.ajax({
            url: "/jersey/Release/getHosts",
            type: "POST",
            data: {ReleaseName: $(this).val()},
            dataType: "json",
            error: function() {
                notificationMessage(LANG.submitError);
            },
            success: function(release) {
                // For each Host
                $.each(release.host, function() {
                    var host = this;

                    $('#copyServiceNewHostType').append($('<option/>').val(host.hostType).text(host.hostType));
                });
            }
        });
    });

    $.each(config.release, function() {
        var release = this;

        // Fill select for copy
        $('#copyServiceNewReleaseName').append($('<option/>').val(release.releaseName).text(release.releaseName));

        // Add Release tab
        var releaseLi = $('<li/>');
        var a = $('<a/>', {id: 'A_' + release.releaseName, text: release.releaseName, href: '#' + release.releaseName, title: 'Click to refresh'});
        releaseLi.append(a);
        ul.append(releaseLi);
        $("#tabsDiv").append($('<div/>', {id: release.releaseName}));

        // Set onclick
        a.click(function() {
            $('#' + release.releaseName).empty();
            $('#' + release.releaseName).prepend(releaseTab(release, ul));
        });
    });

    // Modules
    $.each(config.module, function() {
        var module = this;

        // Skip empty context modules
        if (!module.context) {
            return true;
        }
        $('#addModuleName').append($('<option/>').val(module.moduleName).text(module.moduleName));
    });

    // Add New Release tab
    var addReleaseLi = $('<li/>');
    var a = $('<a/>', {id: 'A_ADD_RELEASE', text: '+Release', href: '#ADD_RELEASE', title: 'New Release'});
    addReleaseLi.append(a);
    ul.append(addReleaseLi);
    $("#tabsDiv").append($('<div/>', {id: 'ADD_RELEASE'}));

    // Set onclick
    a.click(function() {
        $("#addReleaseDialog").dialog("open");
    });

    // If no releases defined
    if (!config.release.length) {
        a.click();
    }

    // Return
    return ul;
}

function releaseTab(release, ul) {
    var releaseName = release.releaseName;

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    // Release Header
    var h1 = $('<h1/>', {'class': "center", text: releaseName});
    div.append(h1);

    // Create a table
    var releaseTable = $('<table/>', {'class': "ui-widget ui-widget-content"});
    var releaseTd = $('<td/>');
    releaseTable.append($('<tr/>').append(releaseTd));
    div.append(releaseTable);

    var hostsTable = $('<table/>', {'class': "ui-widget ui-widget-content"});
    var td1 = $('<td/>', {text: 'Host Type'});
    hostsTable.append($('<tr/>', {'class': "ui-widget-header"}).append(td1));
    var hostsTd = $('<td/>');
    hostsTable.append($('<tr/>').append(hostsTd));
    div.append(hostsTable);

    // Add Custom Jobs Button
    var jobsButton = $('<button/>', {"class": "flow", text: 'Custom Jobs', 'title': 'Custom Jobs for periodic Commands execution'});
    setModuleImage(jobsButton).click(function() {

        var li = $('<li/>');
        var a = $('<a/>', {id: 'A_' + releaseName + '_JOBS', text: 'Custom Jobs [' + releaseName + ']', href: '#' + releaseName + '_JOBS', title: 'Click to refresh'});
        var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
        span.click(function(event) {
            li.remove();
            $('#A_' + releaseName).click();
        });
        li.append(a, span);
        ul.append(li);
        $("#tabsDiv").append($('<div/>', {id: releaseName + '_JOBS'}));

        a.click(function(event) {
            $.ajax({
                url: "/jersey/Release/getRelease",
                type: "POST",
                dataType: "json",
                data: {ReleaseName: releaseName},
                beforeSend: function(data) {
                    $('#' + releaseName + '_JOBS').empty();
                    $('#' + releaseName + '_JOBS').prepend(LANG.loading);
                },
                error: function() {
                    $('#' + releaseName + '_JOBS').empty();
                    $('#' + releaseName + '_JOBS').prepend(LANG.submitError);
                },
                success: function(release) {
                    $('#' + releaseName + '_JOBS').empty();
                    $('#' + releaseName + '_JOBS').prepend(jobsTab(release));
                }
            });
        });

        // Show
        a.click();

        $("#tabsDiv").tabs('refresh');
        $("#tabsDiv").tabs({active: -1});
    });
    releaseTd.append(jobsButton);

    // Add Charts Button
    var chartsButton = $('<button/>', {"class": "flow", text: 'Service Charts', 'title': 'Charts for Commands'});
    setModuleImage(chartsButton).click(function() {
        var li = $('<li/>');
        var a = $('<a/>', {id: 'A_' + releaseName + '_CHARTS', text: 'Service Charts [' + releaseName + ']', href: '#' + releaseName + '_CHARTS', title: 'Click to refresh'});
        var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
        span.click(function(event) {
            li.remove();
            $('#A_' + releaseName).click();
        });
        li.append(a, span);
        ul.append(li);
        $("#tabsDiv").append($('<div/>', {id: releaseName + '_CHARTS'}));

        a.click(function(event) {
            $.ajax({
                url: "/jersey/Release/getRelease",
                type: "POST",
                dataType: "json",
                data: {ReleaseName: releaseName},
                beforeSend: function(data) {
                    $('#' + releaseName + '_CHARTS').empty();
                    $('#' + releaseName + '_CHARTS').prepend(LANG.loading);
                },
                error: function() {
                    $('#' + releaseName + '_CHARTS').empty();
                    $('#' + releaseName + '_CHARTS').prepend(LANG.submitError);
                },
                success: function(release) {
                    $('#' + releaseName + '_CHARTS').empty();
                    $('#' + releaseName + '_CHARTS').prepend(chartsTab(release));
                }
            });
        });

        // Show
        a.click();

        $("#tabsDiv").tabs('refresh');
        $("#tabsDiv").tabs({active: -1});
    });
    releaseTd.append(chartsButton);

    // Add Service Connections Button
    var connectionsButton = $('<button/>', {"class": "flow", text: 'Service Connections', 'title': 'Connections between Services'});
    setModuleImage(connectionsButton).click(function() {

        var li = $('<li/>');
        var a = $('<a/>', {id: 'A_' + releaseName + '_CONNECTIONS', text: 'Service Connections [' + releaseName + ']', href: '#' + releaseName + '_CONNECTIONS', title: 'Click to refresh'});
        var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
        span.click(function(event) {
            li.remove();
            $('#A_' + releaseName).click();
        });
        li.append(a, span);
        ul.append(li);
        $("#tabsDiv").append($('<div/>', {id: releaseName + '_CONNECTIONS'}));

        a.click(function(event) {
            $.ajax({
                url: "/jersey/Release/getConnections",
                type: "POST",
                dataType: "json",
                data: {ReleaseName: releaseName},
                beforeSend: function(data) {
                    $('#' + releaseName + '_CONNECTIONS').empty();
                    $('#' + releaseName + '_CONNECTIONS').prepend(LANG.loading);
                },
                error: function() {
                    $('#' + releaseName + '_CONNECTIONS').empty();
                    $('#' + releaseName + '_CONNECTIONS').prepend(LANG.submitError);
                },
                success: function(release) {
                    $('#' + releaseName + '_CONNECTIONS').empty();

                    var div = $('<div/>').click(function() {
                        $('#menu').hide();
                    });
                    $('#' + releaseName + '_CONNECTIONS').append(div);

                    connectionsTab(release, div);
                }
            });
        });

        // Show
        a.click();

        $("#tabsDiv").tabs('refresh');
        $("#tabsDiv").tabs({active: -1});
    });
    releaseTd.append(connectionsButton);

    // Add Service Flows Button
    var flowsButton = $('<button/>', {"class": "flow", text: 'Service Flows', 'title': 'Grouping Services in Flows'});
    setModuleImage(flowsButton).click(function() {

        var li = $('<li/>');
        var a = $('<a/>', {id: 'A_' + releaseName + '_FLOWS', text: 'Service Flows [' + releaseName + ']', href: '#' + releaseName + '_FLOWS', title: 'Click to refresh'});
        var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
        span.click(function(event) {
            li.remove();
            $('#A_' + releaseName).click();
        });
        li.append(a, span);
        ul.append(li);
        $("#tabsDiv").append($('<div/>', {id: releaseName + '_FLOWS'}));

        // Onclick
        a.click(function(event) {

            $.ajax({
                url: "/jersey/Release/getRelease",
                type: "POST",
                dataType: "json",
                data: {ReleaseName: releaseName},
                beforeSend: function(data) {
                    $('#' + releaseName + '_FLOWS').empty();
                    $('#' + releaseName + '_FLOWS').prepend(LANG.loading);
                },
                error: function() {
                    $('#' + releaseName + '_FLOWS').empty();
                    $('#' + releaseName + '_FLOWS').prepend(LANG.submitError);
                },
                success: function(release) {
                    $('#' + releaseName + '_FLOWS').empty();
                    $('#' + releaseName + '_FLOWS').prepend(flowsTab(release));
                }
            });
        });

        // Show
        a.click();

        $("#tabsDiv").tabs('refresh');
        $("#tabsDiv").tabs({active: -1});
    });
    releaseTd.append(flowsButton);

    // Add Modules Button
    var modulesButton = $('<button/>', {"class": "flow", text: 'Service Modules', 'title': 'Adding Modules for Services'});
    setModuleImage(modulesButton).click(function() {
        var li = $('<li/>');
        var a = $('<a/>', {id: 'A_' + releaseName + '_MODULES', text: 'Service Modules [' + releaseName + ']', href: '#' + releaseName + '_MODULES', title: 'Click to refresh'});
        var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
        span.click(function(event) {
            li.remove();
            $('#A_' + releaseName).click();
        });
        li.append(a, span);
        ul.append(li);
        $("#tabsDiv").append($('<div/>', {id: releaseName + '_MODULES'}));

        a.click(function(event) {
            $.ajax({
                url: "/jersey/Release/getRelease",
                type: "POST",
                dataType: "json",
                data: {ReleaseName: releaseName},
                beforeSend: function(data) {
                    $('#' + releaseName + '_MODULES').empty();
                    $('#' + releaseName + '_MODULES').prepend(LANG.loading);
                },
                error: function() {
                    $('#' + releaseName + '_MODULES').empty();
                    $('#' + releaseName + '_MODULES').prepend(LANG.submitError);
                },
                success: function(release) {
                    $('#' + releaseName + '_MODULES').empty();
                    $('#' + releaseName + '_MODULES').prepend(modulesTab(release));
                }
            });
        });

        // Show
        a.click();

        $("#tabsDiv").tabs('refresh');
        $("#tabsDiv").tabs({active: -1});
    });
    releaseTd.append(modulesButton);

    // Site Button
    var siteButton = $('<button/>', {"class": "flow", text: 'Site Map', 'title': 'Mapping Services in Site Configuration'});
    setModuleImage(siteButton).click(function() {

        var li = $('<li/>');
        var a = $('<a/>', {id: 'A_' + releaseName + '_SITE', text: 'Site Map [' + releaseName + ']', href: '#' + releaseName + '_SITE', title: 'Click to refresh'});
        var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
        span.click(function(event) {
            li.remove();
            $('#A_' + releaseName).click();
        });
        li.append(a, span);
        ul.append(li);
        $("#tabsDiv").append($('<div/>', {id: releaseName + '_SITE'}));

        a.click(function(event) {
            $.ajax({
                url: "/jersey/Release/getRelease",
                type: "POST",
                dataType: "json",
                data: {ReleaseName: releaseName},
                beforeSend: function(data) {
                    $('#' + releaseName + '_SITE').empty();
                    $('#' + releaseName + '_SITE').prepend(LANG.loading);
                },
                error: function() {
                    $('#' + releaseName + '_SITE').empty();
                    $('#' + releaseName + '_SITE').prepend(LANG.submitError);
                },
                success: function(release) {
                    $('#' + releaseName + '_SITE').empty();
                    $('#' + releaseName + '_SITE').prepend(siteTab(release));
                }
            });
        });

        // Show
        a.click();

        $("#tabsDiv").tabs('refresh');
        $("#tabsDiv").tabs({active: -1});
    });
    releaseTd.append(siteButton);

    // Open Release
    $.ajax({
        url: "/jersey/Release/getHosts",
        type: "POST",
        data: {ReleaseName: releaseName},
        dataType: "json",
        success: function(release) {

            // Update Header
            h1.append(' (version ' + release.version + ')');

            // For each Host
            $.each(release.host, function() {
                var host = this;
                var hostType = host.hostType;

                // Add Host Button
                var hostButton = $('<button/>', {"class": "hostname", text: host.hostName});

                // Set Host Icon
                setHostIcon(hostButton, 'ui-icon-extlink').click(function() {
                    var li = $('<li/>');
                    var a = $('<a/>', {id: 'A_' + hostType, text: hostType + ' [' + releaseName + ']', href: '#' + hostType, title: 'Click to refresh'});
                    var span = $('<span/>', {'class': "ui-icon ui-icon-close", role: "presentation", text: "Remove Tab"});
                    span.click(function(event) {
                        li.remove();
                        $('#A_' + releaseName).click();
                    });
                    li.append(a, span);
                    ul.append(li);
                    $("#tabsDiv").append($('<div/>', {id: hostType}));

                    // Onclick Host
                    a.click(function() {

                        $.ajax({
                            url: "/jersey/Release/getHost",
                            type: "POST",
                            data: {ReleaseName: releaseName, HostType: hostType},
                            dataType: "json",
                            beforeSend: function(data) {
                                $('#' + hostType).empty();
                                $('#' + hostType).prepend(LANG.loading);
                            },
                            success: function(host) {
                                $('#' + hostType).empty();
                                $('#' + hostType).append(commandsTab(release, host, li));
                            },
                            error: function() {
                                $('#' + hostType).empty();
                                $('#' + hostType).prepend(LANG.submitError);
                            }
                        });
                    });

                    // Show
                    a.click();

                    $("#tabsDiv").tabs('refresh');
                    $("#tabsDiv").tabs({active: -1});
                });
                hostsTd.append(hostButton);
            });

            // Add New Button
            var addHostButton = $('<button/>', {"class": "hostname", text: 'Add Host Type'});

            // Set Host Icon
            setButtonIcon(addHostButton).click(function() {
                $("#addHostReleaseName").val(release.releaseName);
                $("#addHostDialog").dialog("open");
            });
            hostsTd.append(addHostButton);

            // Update Service Password Buttons
            var updateServicePasswordButton = $('<button/>', {text: "Update Service Password"});
            setButtonIcon(updateServicePasswordButton).click(function() {
                $("#updateServicePasswordReleaseName").val(releaseName);
                $("#updateServicePasswordDialog").dialog("open");
            });

            // Update Command Password Buttons
            var updateCommandPasswordButton = $('<button/>', {text: "Update Command Password"});
            setButtonIcon(updateCommandPasswordButton).click(function() {
                $("#updateCommandPasswordReleaseName").val(releaseName);
                $("#updateCommandPasswordDialog").dialog("open");
            });

            // If no Hosts
            if (!release.host.length) {
                updateServicePasswordButton.button('disable');
                updateCommandPasswordButton.button('disable');
            }

            // Add Buttons
            var passwordTd = $('<td/>');
            passwordTd.append(updateServicePasswordButton, updateCommandPasswordButton);
            hostsTable.append($('<tr/>').append(passwordTd));
        }
    });

    var downloadRelease = $('<button/>', {text: "Download Release File"});
    setButtonIcon(downloadRelease).click(function() {
        var form = $('<form/>', {method: "post", action: "/jersey/Release/downloadRelease", 'class': 'hidden'});
        div.append(form);
        form.append($('<input/>', {name: "ReleaseName", value: releaseName}));
        form.submit();
    });

    var uploadRelease = $('<button/>', {text: "Upload Release File"});
    setButtonIcon(uploadRelease).click(function() {
        $("#uploadReleaseName").val(releaseName);
        $("#uploadReleaseDialog").dialog("open");
    });

    // Remove Release
    var removeReleaseButton = $('<button/>', {text: "Remove Release"});
    setButtonIcon(removeReleaseButton).click(function() {
        $("#removeReleaseName").val(releaseName);
        $("#removeReleaseDialog").dialog("open");
    });

    // Return table
    return div.append(downloadRelease, uploadRelease, removeReleaseButton);
}

function flowsTab(release) {
    var releaseName = release.releaseName;

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    // Create a table
    var table = $('<table/>', {'class': "ui-widget ui-widget-content"});
    var td1 = $('<td/>', {'class': 'hostname', text: 'Flow'});
    var td2 = $('<td/>', {text: 'Reports Filter'});
    table.append($('<tr/>', {'class': "ui-widget-header"}).append(td1, td2));
    div.append(table);

    // If no Flows
    if (!release.flow.length) {
        var td1 = $('<td/>', {'colspan': 2}).append(LANG.noFlows);
        table.append($('<tr/>').append(td1));
    }

    // Add Flow button
    var addFlowButton = $('<button/>', {text: "Add Flow"});
    setButtonIcon(addFlowButton).click(function() {
        $('#addFlowReleaseName').val(releaseName);
        $("#addFlowDialog").dialog("open");
    });
    div.append(addFlowButton);

    // For each flow
    $.each(release.flow, function() {
        var flow = this;
        var flowName = flow.flowName;

        // Create job Button
        var flowButton = $('<button/>', {"class": "hostname", text: flowName});

        // Set Service Icon
        setServiceIcon(flowButton, 'ui-icon-triangle-1-s').click(function() {

            // Create Button Menu
            var flowMenu = [];

            var removeFlow = $('<li/>', {text: "Remove Flow"}).click(function() {
                $('#menu').hide();
                $('#removeFlowReleaseName').val(releaseName);
                $('#removeFlowName').val(flowName);
                $("#removeFlowDialog").dialog("open");
            });
            flowMenu.push(setMenuImage(removeFlow));

            var renameFlow = $('<li/>', {text: "Rename Flow"}).click(function() {
                $('#menu').hide();
                $('#renameFlowReleaseName').val(releaseName);
                $("#renameFlowName").val(flowName);
                $("#renameFlowDialog").dialog("open");
            });
            flowMenu.push(setMenuImage(renameFlow));

            var updateFlow = $('<li/>', {text: "Update Flow"}).click(function() {
                $('#menu').hide();
                $('#updateFlowReleaseName').val(releaseName);
                $("#updateFlowName").val(flowName);
                $("#updateFlowFilter").val(flow.filter);
                $("#updateFlowDialog").dialog("open");
            });
            flowMenu.push(setMenuImage(updateFlow));

            // Menu
            showMenu(flowMenu, this);
            return false;
        });

        // Table
        var td1 = $('<td/>').append(flowButton);
        var td2 = $('<td/>', {text: flow.filter});
        table.append($('<tr/>', {'class': 'high'}).append(td1, td2));

        var h2 = $('<h2/>', {'class': "center", text: flowName});

        // Create a table
        var flowTable = $('<table/>', {'class': "ui-widget ui-widget-content"});
        var flowTd1 = $('<td/>', {'class': 'hostname', text: 'Group'});
        var flowTd2 = $('<td/>', {text: 'Services'});
        flowTable.append($('<tr/>', {'class': "ui-widget-header"}).append(flowTd1, flowTd2));
        div.append(h2, flowTable);

        // For each host
        $.each(flow.host, function() {
            var host = this;
            var hostName = host.hostName;

            var flowTd1 = $('<td/>', {'class': 'hostname'});
            var flowTd2 = $('<td/>');
            flowTable.append($('<tr/>').append(flowTd1, flowTd2));

            // Create Host Button
            var hostButton = $('<button/>', {"class": "hostname", text: hostName + ' [' + host.hostType + ']'});

            // Set Host Icon
            setHostIcon(hostButton, 'ui-icon-triangle-1-s').click(function() {

                // Create Button Menu
                var hostMenu = [];

                var addService = $('<li/>', {text: "Add Service"}).click(function() {
                    $('#menu').hide();
                    $('#addFlowServiceReleaseName').val(releaseName);
                    $('#addFlowServiceFlowName').val(flowName);
                    $('#addFlowServiceHostName').val(hostName);
                    $("#addFlowServiceDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(addService));

                var removeHost = $('<li/>', {text: "Remove Group"}).click(function() {
                    $('#menu').hide();
                    $('#removeFlowHostReleaseName').val(releaseName);
                    $('#removeFlowHostFlowName').val(flowName);
                    $('#removeFlowHostName').val(hostName);
                    $("#removeFlowHostDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(removeHost));

                var renameHost = $('<li/>', {text: "Rename Group"}).click(function() {
                    $('#menu').hide();
                    $('#renameFlowHostReleaseName').val(releaseName);
                    $('#renameFlowHostFlowName').val(flowName);
                    $('#renameFlowHostName').val(hostName);
                    $("#renameFlowHostDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(renameHost));

                var updateHost = $('<li/>', {text: "Update Group"}).click(function() {
                    $('#menu').hide();
                    $('#updateFlowHostReleaseName').val(releaseName);
                    $('#updateFlowHostFlowName').val(flowName);
                    $('#updateFlowHostName').val(hostName);
                    $('#updateFlowHostType').val(host.hostType);
                    $("#updateFlowHostDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(updateHost));

                // Menu
                showMenu(hostMenu, this);
                return false;
            });
            flowTd1.append(hostButton);

            // For each service
            $.each(host.service, function() {
                var service = this;

                // Creata a Button
                var serviceButton = $('<button/>', {text: service.serviceName, 'class': 'flowService ui-state-ok'});

                // Set Service Icon
                setServiceIcon(serviceButton, "ui-icon-close").click(function() {
                    $('#menu').hide();
                    $('#removeFlowServiceReleaseName').val(releaseName);
                    $('#removeFlowServiceFlowName').val(flowName);
                    $('#removeFlowServiceHostName').val(hostName);
                    $('#removeFlowServiceName').val(service.serviceName);
                    $("#removeFlowServiceDialog").dialog("open");
                });

                flowTd2.append(serviceButton);
            });
        });

        // Add Host button
        var addFlowHostButton = $('<button/>', {text: "Add Group"});
        setButtonIcon(addFlowHostButton).click(function() {
            $('#addFlowHostReleaseName').val(releaseName);
            $('#addFlowHostFlowName').val(flowName);
            $("#addFlowHostDialog").dialog("open");
        });

        var flowTd1 = $('<td/>', {colspan: 2});
        flowTable.append($('<tr/>').append(flowTd1));
        flowTd1.append(addFlowHostButton);
    });

    return div;
}

function siteTab(release) {
    var site = release.site;

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    // Create a table
    var siteTable = $('<table/>', {'class': "ui-widget ui-widget-content"});
    var siteTd1 = $('<td/>', {'class': 'hostname', text: 'Group'});
    var siteTd2 = $('<td/>', {text: 'Services'});
    siteTable.append($('<tr/>', {'class': "ui-widget-header"}).append(siteTd1, siteTd2));
    div.append(siteTable);

    // If hosts exists
    if (!site || !site.host.length) {
        var td1 = $('<td/>', {'colspan': 2}).append(LANG.noHosts);
        siteTable.append($('<tr/>').append(td1));
    }

    // For each host
    $.each(site.host, function() {
        var host = this;
        var hostType = host.hostType;
        var hostName = host.hostName;

        var siteTd1 = $('<td/>', {'class': 'hostname'});
        var siteTd2 = $('<td/>');
        siteTable.append($('<tr/>').append(siteTd1, siteTd2));

        // Create Host Button
        var hostButton = $('<button/>', {"class": "hostname", text: hostName + ' [' + hostType + ']'});

        // Set Host Icon
        setHostIcon(hostButton, 'ui-icon-triangle-1-s').click(function() {

            // Create Button Menu
            var hostMenu = [];
            var addService = $('<li/>', {text: "Add Service"}).click(function() {
                $('#menu').hide();
                $('#addSiteServiceReleaseName').val(release.releaseName);
                $('#addSiteServiceHostName').val(hostName);
                $("#addSiteServiceDialog").dialog("open");
            });
            hostMenu.push(setMenuImage(addService));

            var updateHost = $('<li/>', {text: "Update Group"}).click(function() {
                $('#menu').hide();
                $('#updateSiteHostReleaseName').val(release.releaseName);
                $('#updateSiteHostName').val(hostName);
                $('#updateSiteHostType').val(hostType);
                $("#updateSiteHostDialog").dialog("open");
            });
            hostMenu.push(setMenuImage(updateHost));

            var removeHost = $('<li/>', {text: "Remove Group"}).click(function() {
                $('#menu').hide();
                $('#removeSiteHostReleaseName').val(release.releaseName);
                $('#removeSiteHostName').val(hostName);
                $("#removeSiteHostDialog").dialog("open");
            });
            hostMenu.push(setMenuImage(removeHost));

            // Menu
            showMenu(hostMenu, this);
            return false;
        });
        siteTd1.append(hostButton);

        // For each service
        $.each(host.service, function() {
            var service = this;
            var hostFilter = service.hostName || '';

            // Creata a Button
            var serviceButton = $('<button/>', {text: service.serviceName + ' [' + hostFilter + ']', 'class': 'flowService ui-state-ok'});

            // Set Service Icon
            setServiceIcon(serviceButton, "ui-icon-close").click(function() {
                $('#menu').hide();
                $('#removeSiteServiceReleaseName').val(release.releaseName);
                $('#removeSiteServiceHostName').val(hostName);
                $('#removeSiteServiceName').val(service.serviceName);
                $("#removeSiteServiceDialog").dialog("open");
            });

            siteTd2.append(serviceButton);
        });
    });

    // Add Host button
    var addSiteHostButton = $('<button/>', {text: "Add Group"});
    setButtonIcon(addSiteHostButton).click(function() {
        $('#addSiteHostReleaseName').val(release.releaseName);
        $("#addSiteHostDialog").dialog("open");
    });

    // Return
    return div.append(addSiteHostButton);
}

function jobsTab(release) {

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    var releaseName = release.releaseName;

    // Create a table
    var table = $('<table/>', {'class': "ui-widget ui-widget-content"});
    div.append(table);

    // Create a row
    var td1 = $('<td/>', {'class': 'hostname', text: 'Job'});
    var tr = $('<tr/>', {'class': "ui-widget-header"}).append(td1);
    table.append(tr);

    // Create time fields
    for (var i = 2; i <= 10; i++) {
        var td = $('<td/>', {text: (i - 1) + " hour"});
        tr.append(td);
    }

    // If no jobs
    if (!release.job.length) {
        var td1 = $('<td/>', {'colspan': 10}).append(LANG.noJobs);
        table.append($('<tr/>', {'class': "ui"}).append(td1));
    }

    // Add Job button
    var addJobButton = $('<button/>', {text: "Add Job"});
    setButtonIcon(addJobButton).click(function() {
        $('#addJobReleaseName').val(releaseName);
        $("#addJobDialog").dialog("open");
    });
    div.append(addJobButton);

    // For each job
    $.each(release.job, function() {
        var job = this;
        var jobName = job.jobName;

        var h2 = $('<h2/>', {'class': "center", text: jobName});

        // Create a row
        var td1 = $('<td/>');
        var tr = $('<tr/>').append(td1);
        table.append(tr);

        // Create job Button
        var jobButton = $('<button/>', {"class": "hostname", text: jobName});

        // Set Job Icon
        setServiceIcon(jobButton, 'ui-icon-triangle-1-s').click(function() {

            // Create Button Menu
            var jobMenu = [];
            var updateJob = $('<li/>', {text: "Update Job"}).click(function() {
                $('#menu').hide();
                $('#updateJobReleaseName').val(releaseName);
                $("#updateJobName").val(jobName);
                $("#updateJobStart").val(job.start);
                $("#updateJobPeriod").val(job.period);
                $("#updateJobDialog").dialog("open");
            });
            jobMenu.push(setMenuImage(updateJob));

            var removeJob = $('<li/>', {text: "Remove Job"}).click(function() {
                $('#menu').hide();
                $('#removeJobReleaseName').val(releaseName);
                $('#removeJobName').val(jobName);
                $("#removeJobDialog").dialog("open");
            });
            jobMenu.push(setMenuImage(removeJob));

            // Menu
            showMenu(jobMenu, this);
            return false;
        });

        // Add button
        td1.append(jobButton);
        div.append(h2);

        // Check schedule
        var schedule = parseInt(job.start);

        if (schedule > 0 && parseInt(job.period) > 0) {

            for (var i = 2; i <= 10; i++) {
                var td = $('<td/>', {'class': 'center'});
                tr.append(td);

                while (schedule <= 60 * (i - 1)) {
                    td.addClass('ui-state-ok');
                    if (td.text() !== "") {
                        td.append(", ");
                    }
                    td.append(schedule - 60 * (i - 2));
                    schedule += parseInt(job.period);
                }
            }
        } else {
            var td2 = $('<td/>', {'class': 'center bold', colspan: 11, text: 'On Demand'});
            tr.append(td2);
        }

        // Create a table for hosts
        var commandTable = $('<table/>', {'class': "ui-widget ui-widget-content"});
        var td1 = $('<td/>', {'class': 'hostname', text: 'Group'});
        var td2 = $('<td/>', {text: 'Services'});
        commandTable.append($('<tr/>', {'class': "ui-widget-header"}).append(td1, td2));
        div.append(commandTable);

        // For each host
        $.each(job.host, function() {
            var host = this;
            var hostType = host.hostType;
            var hostName = host.hostName;

            var td1 = $('<td/>', {'class': 'hostname'});
            var td2 = $('<td/>');
            commandTable.append($('<tr/>').append(td1, td2));

            // Create Host Button
            var hostButton = $('<button/>', {"class": "hostname", text: hostName + ' [' + hostType + ']'});

            // Set HostIcon
            setHostIcon(hostButton, 'ui-icon-triangle-1-s').click(function() {

                // Create Button Menu
                var hostMenu = [];
                var addService = $('<li/>', {text: "Add Service"}).click(function() {
                    $('#menu').hide();

                    $('#addJobServiceList').empty();

                    // Hosts
                    $.each(release.host, function() {
                        var releaseHost = this;

                        // Skip wrong Hosts
                        if (!releaseHost.hostType.match(host.hostType)) {
                            return true;
                        }

                        // Services
                        $.each(releaseHost.service, function() {
                            var service = this;

                            if ($("#addJobServiceList option[value='" + service.serviceName + "']").length) {
                                return true;
                            }

                            $('#addJobServiceList').append($('<option/>').val(service.serviceName).text(service.serviceName));
                        });
                    });

                    $('#addJobServiceReleaseName').val(releaseName);
                    $('#addJobServiceJobName').val(jobName);
                    $('#addJobServiceHostName').val(hostName);
                    $("#addJobServiceDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(addService));

                var updateHost = $('<li/>', {text: "Update Group"}).click(function() {
                    $('#menu').hide();
                    $('#updateJobHostReleaseName').val(releaseName);
                    $('#updateJobHostJobName').val(jobName);
                    $('#updateJobHostName').val(hostName);
                    $('#updateJobHostType').val(hostType);
                    $("#updateJobHostDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(updateHost));

                var removeHost = $('<li/>', {text: "Remove Group"}).click(function() {
                    $('#menu').hide();
                    $('#removeJobHostReleaseName').val(releaseName);
                    $('#removeJobHostJobName').val(jobName);
                    $('#removeJobHostName').val(hostName);
                    $("#removeJobHostDialog").dialog("open");
                });
                hostMenu.push(setMenuImage(removeHost));

                // Menu
                showMenu(hostMenu, this);
                return false;
            });
            td1.append(hostButton);

            // For each service
            $.each(host.service, function() {
                var service = this;
                var serviceName = service.serviceName;

                var fieldset = $('<fieldset/>', {'class': 'service ui-widget-content ui-corner-all'});
                var legend = $('<legend/>', {text: serviceName, 'class': 'center'});
                fieldset.append(legend);

                $.each(service.command, function() {
                    var command = this;

                    // Remove Command button
                    var commandButton = $('<button/>', {text: command.commandId, 'class': 'hostname ui-state-ok'});

                    // Set Service Icon
                    setCommandIcon(commandButton, "ui-icon-close").click(function() {
                        $('#removeJobCommandReleaseName').val(releaseName);
                        $('#removeJobCommandJobName').val(jobName);
                        $('#removeJobCommandHostName').val(hostName);
                        $('#removeJobCommandServiceName').val(serviceName);
                        $('#removeJobCommandId').val(command.commandId);
                        $("#removeJobCommandDialog").dialog("open");
                    });
                    fieldset.append(commandButton);
                });

                // Add Command button
                var addCommandButton = $('<button/>', {text: "Command"});
                addCommandButton.button({icons: {primary: "ui-icon-circle-plus"}}).click(function() {

                    $('#addJobCommandList').empty();

                    // Hosts
                    $.each(release.host, function() {
                        var releaseHost = this;

                        // Skip wrong Hosts
                        if (!releaseHost.hostType.match(host.hostType)) {
                            return true;
                        }

                        // Services
                        $.each(releaseHost.service, function() {
                            var releaseService = this;

                            // Skip wrong Services
                            if (!releaseService.serviceName.match(service.serviceName)) {
                                return true;
                            }

                            // Commands
                            $.each(releaseService.command, function() {
                                var command = this;

                                // Skip Operations
                                if (command.group && command.group.match(/Operations/i)) {
                                    return true;
                                }

                                if ($("#addJobCommandList option[value='" + command.commandId + "']").length) {
                                    return true;
                                }

                                $('#addJobCommandList').append($('<option/>').val(command.commandId).text(command.commandId));
                            });
                        });
                    });

                    $('#addJobCommandReleaseName').val(releaseName);
                    $('#addJobCommandJobName').val(jobName);
                    $('#addJobCommandHostName').val(hostName);
                    $('#addJobCommandServiceName').val(serviceName);
                    $("#addJobCommandDialog").dialog("open");
                });

                // Remove Service button
                var removeServiceButton = $('<button/>', {text: "Service"});
                removeServiceButton.button({icons: {primary: "ui-icon-trash"}}).click(function() {
                    $('#removeJobServiceReleaseName').val(releaseName);
                    $('#removeJobServiceJobName').val(jobName);
                    $('#removeJobServiceHostName').val(hostName);
                    $('#removeJobServiceName').val(serviceName);
                    $("#removeJobServiceDialog").dialog("open");
                });

                fieldset.append(addCommandButton, removeServiceButton);
                td2.append(fieldset);
            });
        });

        // Add Job button
        var addJobHostButton = $('<button/>', {text: "Add Group"});
        setButtonIcon(addJobHostButton).click(function() {

            $('#addJobHostList').empty();

            // Hosts
            $.each(release.host, function() {
                var host = this;

                $('#addJobServiceList').append($('<option/>').val(host.hostType).text(host.hostType));
            });


            $('#addJobHostReleaseName').val(releaseName);
            $('#addJobHostJobName').val(jobName);
            $("#addJobHostDialog").dialog("open");
        });

        var td1 = $('<td/>', {colspan: 2});
        commandTable.append($('<tr/>').append(td1));
        td1.append(addJobHostButton);
    });

    return div;
}

function connectionsTab(release, div) {

    // Create a table
    var table = $('<table/>', {'class': "ui-widget ui-widget-content"});
    var td1 = $('<td/>', {'class': 'hostname', text: 'Connection'});
    var td2 = $('<td/>', {text: 'Start'});
    var td3 = $('<td/>', {text: 'End'});
    table.append($('<tr/>', {'class': "ui-widget-header"}).append(td1, td2, td3));
    div.append(table);

    // If no connections
    if (!release.connection.length) {
        var td1 = $('<td/>', {'colspan': 3}).append(LANG.noConnections);
        table.append($('<tr/>').append(td1));
    }

    // Add Connection button
    var addConnectionButton = $('<button/>', {text: "Add Connection"});
    setButtonIcon(addConnectionButton).click(function() {
        $('#addConnectionReleaseName').val(release.releaseName);
        $("#addConnectionDialog").dialog("open");
    });
    div.append(addConnectionButton);

    // Create a Canvas for table
    var canvas = $('<canvas/>', {'class': "flow"});
    div.append(canvas);

    // For each job
    $.each(release.connection, function() {
        var connection = this;
        var startServiceName = connection.start.serviceName;
        var startHostName = connection.start.hostName || '';
        var endServiceName = connection.end.serviceName;
        var endHostName = connection.end.hostName || '';

        // Create connection Button
        var connectionButton = $('<button/>', {"class": "hostname", text: connection.connectionName});

        // Create a start Button
        var startButton = $('<button/>', {"class": "flowService",
            text: startServiceName + " [" + startHostName + "]"});

        // Set data
        startButton.data('serviceName', startServiceName);
        startButton.data('hostName', startHostName);

        // Set Start service icon
        setServiceIcon(startButton, "ui-icon-link");

        // Create an end Button
        var endButton = $('<button/>', {"class": "flowService",
            text: endServiceName + " [" + endHostName + "]"});

        // Set data
        endButton.data('serviceName', endServiceName);
        endButton.data('hostName', endHostName);

        // Set End service icon
        setServiceIcon(endButton, "ui-icon-link");

        // Set Onclick
        setServiceIcon(connectionButton, 'ui-icon-triangle-1-s').click(function() {

            // Create Button Menu
            var connectionMenu = [];
            var updateConnection = $('<li/>', {text: "Update Connection"}).click(function() {
                $('#menu').hide();
                $('#updateConnectionReleaseName').val(release.releaseName);
                $("#updateConnectionName").val(connection.connectionName);
                $("#updateConnectionStartServiceName").val(startServiceName);
                $("#updateConnectionStartHostName").val(startHostName);
                $("#updateConnectionEndServiceName").val(endServiceName);
                $("#updateConnectionEndHostName").val(endHostName);
                $("#updateConnectionDialog").dialog("open");
            });
            connectionMenu.push(setMenuImage(updateConnection));

            var removeConnection = $('<li/>', {text: "Remove Connection"}).click(function() {
                $('#menu').hide();
                $('#removeConnectionReleaseName').val(release.releaseName);
                $('#removeConnectionName').val(connection.connectionName);
                $("#removeConnectionDialog").dialog("open");
            });
            connectionMenu.push(setMenuImage(removeConnection));

            // Menu
            showMenu(connectionMenu, this);
            return false;
        });

        // Create a table
        var td1 = $('<td/>').append(connectionButton);
        var td2 = $('<td/>', {'class': 'center'}).append(startButton);
        var td3 = $('<td/>', {'class': 'center'}).append(endButton);
        table.append($('<tr/>').append(td1, td2, td3));

        startButton.mouseover(function() {

            // Set position and dimension
            canvas.position({my: "left top", at: "left top", of: table});

            // Define context
            var ctx = canvas[0].getContext("2d");
            ctx.canvas.width = table.width();
            ctx.canvas.height = table.height();
            ctx.lineJoin = "round";
            ctx.lineCap = "round";

            // Clear Area
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            // Draw connection
            drawConnection(ctx, table, startButton, endButton, '#10bf1c', 2);
        });
    });
}

function modulesTab(release) {

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    // If no hosts
    if (!release.host.length) {
        div.text(LANG.noHosts);
        return div;
    }

    // Empty Lists
    $('#addModuleHostType').empty();

    // Set OnChange
    $("#addModuleHostType").change(function() {
        var button = this;

        // Clear List
        $('#addModuleServiceName').empty();

        // If Release Name not found
        if ($(button).val() === "") {
            alert('Please choose Host Type');
            return false;
        }

        // For each Host
        $.each(release.host, function() {
            var host = this;

            // Skip wrong hosts
            if (host.hostType !== $(button).val()) {
                return true;
            }

            // For each service
            $.each(host.service, function() {
                var service = this;

                $('#addModuleServiceName').append($('<option/>').val(service.serviceName).text(service.serviceName));
            });
        });
    });

    // For each Host
    $.each(release.host, function() {
        var host = this;

        $('#addModuleHostType').append($('<option/>').val(host.hostType).text(host.hostType));

        // Service Header
        var h2 = $('<h2/>', {'class': 'center', text: host.hostType});

        // Create a table
        var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});
        var tr = $('<tr/>', {'class': "ui-widget-header"});
        tr.append($('<td/>', {'class': 'hostname', text: 'Service'}));
        tr.append($('<td/>', {text: 'Modules'}));
        table.append(tr);

        var anyModule = false;

        // For each service
        $.each(host.service, function() {
            var service = this;
            var serviceName = service.serviceName;

            // If no modules
            if (!service.module.length) {
                return true;
            }

            // Row
            var tr = $('<tr/>', {'class': "ui high"});
            table.append(tr);

            // Add Service Button
            var serviceButton = $('<button/>', {text: service.serviceName, 'class': 'hostname'});

            // Set Icon
            setServiceIcon(serviceButton, 'ui-icon-circle-plus').click(function() {
                $("#addModuleReleaseName").val(release.releaseName);
                $("#addModuleHostType").val(host.hostType).change();
                $("#addModuleServiceName").val(service.serviceName);
                $("#addModuleDialog").dialog("open");
            });
            tr.append($('<td/>', {'class': 'hostname'}).append(serviceButton));
            var td = $('<td/>');
            tr.append(td);

            // For each module
            $.each(service.module, function() {
                var module = this;

                // Create a Module Button
                var moduleButton = $('<button/>', {"class": "hostname", text: module.moduleName + ' [' + (module.context || '') + ']'});
                td.append(moduleButton);

                // Set Icon
                setServiceIcon(moduleButton, 'ui-icon-triangle-1-s').click(function() {

                    // Hide Tooltip
                    $('.ui-tooltip').hide();

                    // Create Button Menu
                    var serviceMenu = [];
                    var removeModule = $('<li/>', {text: "Remove Module"}).click(function() {
                        $('#menu').hide();
                        $("#removeModuleReleaseName").val(release.releaseName);
                        $("#removeModuleHostType").val(host.hostType);
                        $("#removeModuleServiceName").val(serviceName);
                        $("#removeModuleName").val(module.moduleName);
                        $("#removeModuleDialog").dialog("open");
                    });
                    serviceMenu.push(setMenuImage(removeModule));

                    var updateModule = $('<li/>', {text: "Update Module"}).click(function() {
                        $('#menu').hide();
                        $("#updateModuleReleaseName").val(release.releaseName);
                        $("#updateModuleHostType").val(host.hostType);
                        $("#updateModuleServiceName").val(serviceName);
                        $("#updateModuleName").val(module.moduleName);
                        $("#updateModuleContext").val(module.context);
                        $("#updateModuleLogin").val(module.login);
                        $("#updateModulePort").val(module.port);
                        $("#updateModuleDialog").dialog("open");
                    });
                    serviceMenu.push(setMenuImage(updateModule));

                    // Menu
                    showMenu(serviceMenu, this);
                    return false;
                });

                // Set Tooltip
                moduleButton.tooltip({
                    items: "[class]",
                    content: function() {
                        // Create a charts table
                        var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});

                        // Title
                        var td1 = $('<td/>', {'class': 'hostname', text: 'Context'});
                        var td2 = $('<td/>', {text: module.context});
                        table.append($('<tr/>').append(td1, td2));

                        var td1 = $('<td/>', {'class': 'hostname', text: 'Login'});
                        var td2 = $('<td/>', {text: module.login || ''});
                        table.append($('<tr/>').append(td1, td2));

                        var td1 = $('<td/>', {'class': 'hostname', text: 'Password (encrypted)'});
                        var td2 = $('<td/>', {text: module.password || ''});
                        table.append($('<tr/>').append(td1, td2));

                        var td1 = $('<td/>', {'class': 'hostname', text: 'Port'});
                        var td2 = $('<td/>', {text: module.port || ''});
                        table.append($('<tr/>').append(td1, td2));

                        // Return
                        return table;
                    }});

                anyModule = true;
            });
        });

        // If Modules found
        if (anyModule) {
            div.append(h2, table);
        }
    });

    // Add buttons
    var addModuleButton = $('<button/>', {text: 'Add Module'});
    setButtonIcon(addModuleButton).click(function() {
        $("#addModuleReleaseName").val(release.releaseName);
        $("#addModuleHostType").change();
        $("#addModuleDialog").dialog("open");
    });

    // Return table
    return div.append(addModuleButton);
}

function chartsTab(release) {

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    // If no hosts
    if (!release.host.length) {
        div.text(LANG.noHosts);
        return div;
    }

    // For each Host
    $.each(release.host, function() {
        var host = this;

        // Service Header
        var h2 = $('<h2/>', {'class': 'center', text: host.hostType});

        // Create a table
        var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});
        var tr = $('<tr/>', {'class': "ui-widget-header"});
        tr.append($('<td/>', {'class': 'hostname', text: 'Service'}));
        tr.append($('<td/>', {text: 'Modules'}));
        table.append(tr);

        var anyChart = false;

        // For each service
        $.each(host.service, function() {
            var service = this;
            var serviceName = service.serviceName;

            // If no charts
            if (!service.chart.length) {
                return true;
            }

            // Row
            var tr = $('<tr/>', {'class': "ui high"});
            table.append(tr);

            tr.append($('<td/>', {'class': 'hostname', 'text': service.serviceName}));
            var td = $('<td/>');
            tr.append(td);

            // For each chart
            $.each(service.chart, function() {
                var chart = this;

                // Create a Chart Button
                var chartButton = $('<button/>', {"class": "hostname", text: chart.chartId});
                td.append(chartButton);

                // Set Icon
                setServiceIcon(chartButton, 'ui-icon-triangle-1-s').click(function() {

                    // Hide Tooltip
                    $('.ui-tooltip').hide();

                    // Create Button Menu
                    var serviceMenu = [];
                    var removeChart = $('<li/>', {text: "Remove Chart"}).click(function() {
                        $('#menu').hide();
                        $("#removeChartReleaseName").val(release.releaseName);
                        $("#removeChartHostType").val(host.hostType);
                        $("#removeChartServiceName").val(serviceName);
                        $("#removeChartId").val(chart.chartId);
                        $("#removeChartDialog").dialog("open");
                    });
                    serviceMenu.push(setMenuImage(removeChart));

                    var updateChart = $('<li/>', {text: "Update Chart"}).click(function() {
                        $('#menu').hide();
                        $("#updateChartReleaseName").val(release.releaseName);
                        $("#updateChartHostType").val(host.hostType);
                        $("#updateChartServiceName").val(serviceName);
                        $("#updateChartId").val(chart.chartId);
                        $("#updateChartTitle").val(chart.title);
                        $("#updateChartLabel1").val(chart.label1);
                        $("#updateChartLabel2").val(chart.label2);
                        $("#updateChartLabel3").val(chart.label3);
                        $("#updateChartDialog").dialog("open");
                    });
                    serviceMenu.push(setMenuImage(updateChart));

                    // Menu
                    showMenu(serviceMenu, this);
                    return false;
                });

                // Set Tooltip
                chartButton.tooltip({
                    items: "[class]",
                    content: function() {
                        // Create a charts table
                        var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});

                        // Title
                        var td1 = $('<td/>', {'class': 'hostname', text: 'Title'});
                        var td2 = $('<td/>', {text: chart.title});
                        table.append($('<tr/>').append(td1, td2));

                        var td1 = $('<td/>', {'class': 'hostname', text: 'Label 1'});
                        var td2 = $('<td/>', {text: chart.label1 || ''});
                        table.append($('<tr/>').append(td1, td2));

                        var td1 = $('<td/>', {'class': 'hostname', text: 'Label 2'});
                        var td2 = $('<td/>', {text: chart.label2 || ''});
                        table.append($('<tr/>').append(td1, td2));

                        var td1 = $('<td/>', {'class': 'hostname', text: 'Label 3'});
                        var td2 = $('<td/>', {text: chart.label3 || ''});
                        table.append($('<tr/>').append(td1, td2));

                        // Return
                        return table;
                    }});

                anyChart = true;
            });
        });

        // If Charts found
        if (anyChart) {
            div.append(h2, table);
        }
    });

    // Return table
    return div;
}

function commandsTab(release, host, li) {
    var hostType = host.hostType;
    var releaseName = release.releaseName;

    var div = $('<div/>').click(function() {
        $('#menu').hide();
    });

    // Release hosts
    $('#transferServiceNewHostType').empty();
    $('#addServiceLinkSelect').empty();
    $('#updateServiceLink').empty();

    // Set OnChange
    $("#addServiceLinkSelect").change(function() {
        var button = this;

        // Clear List
        $('#addServiceLinkServiceName').empty();

        // If Release Name not found
        if ($(button).val() === "") {
            alert('Please choose Linked Host');
            return false;
        }

        $.ajax({
            url: "/jersey/Release/getHost",
            type: "POST",
            data: {ReleaseName: releaseName, HostType: $(button).val()},
            dataType: "json",
            success: function(host) {

                // For each service
                $.each(host.service, function() {
                    var service = this;

                    $('#addServiceLinkServiceName').append($('<option/>').val(service.serviceName).text(service.serviceName));
                });
            },
            error: function() {
                notificationMessage(LANG.submitError);
            }
        });
    });

    $.each(release.host, function() {
        var host = this;

        // Fill select for link
        $('#addServiceLinkSelect').append($('<option/>').val(host.hostType).text(host.hostType));
        $('#updateServiceLink').append($('<option/>').val(host.hostType).text(host.hostType));
        $('#transferServiceNewHostType').append($('<option/>').val(host.hostType).text(host.hostType));
    });

    // Create a table
    var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});
    var tr = $('<tr/>', {'class': "ui-widget-header"});
    tr.append($('<td/>', {'class': 'hostname', text: 'Service'}));
    tr.append($('<td/>', {'class': 'width100', text: 'Linked Host'}));
    tr.append($('<td/>', {text: 'Commands'}));
    table.append(tr);
    div.append(table);

    // If no services
    if (!host.service.length) {
        var td1 = $('<td/>', {'colspan': 4}).append(LANG.noServices);
        table.append($('<tr/>', {'class': "ui"}).append(td1));
    }

    // For each Service
    $.each(host.service, function() {
        var service = this;
        var serviceName = service.serviceName;

        // Create a service Row
        var tr = $('<tr/>');
        table.append(tr);

        // Create a service Button
        var serviceButton = $('<button/>', {"class": "hostname", text: serviceName});
        tr.append($('<td/>').append(serviceButton));
        tr.append($('<td/>', {'class': 'center', text: service.serviceLink || ''}));

        // Set Icon
        setServiceIcon(serviceButton, 'ui-icon-triangle-1-s').click(function() {

            // Hide Tooltip
            $('.ui-tooltip').hide();

            // Create Button Menu
            var serviceMenu = [];

            var addCommand = $('<li/>', {text: "Add Command"}).click(function() {
                $('#menu').hide();
                $("#addCommandReleaseName").val(releaseName);
                $("#addCommandHostType").val(hostType);
                $("#addCommandServiceName").val(serviceName);
                $("#addCommandDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(addCommand));

            var copyService = $('<li/>', {text: "Copy Service"}).click(function() {
                $('#menu').hide();
                $("#copyServiceReleaseName").val(releaseName);
                $("#copyServiceNewReleaseName").val(releaseName).change();
                $("#copyServiceHostType").val(hostType);
                $("#copyServiceName").val(serviceName);
                $("#copyServiceDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(copyService));

            var removeService = $('<li/>', {text: "Remove Service"}).click(function() {
                $('#menu').hide();
                $("#removeServiceReleaseName").val(releaseName);
                $("#removeServiceHostType").val(hostType);
                $("#removeServiceName").val(serviceName);
                $("#removeServiceDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(removeService));

            var renameService = $('<li/>', {text: "Rename Service"}).click(function() {
                $('#menu').hide();
                $("#renameServiceReleaseName").val(releaseName);
                $("#renameServiceHostType").val(hostType);
                $("#renameServiceName").val(serviceName);
                $("#renameServiceDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(renameService));

            var replaceServiceCommands = $('<li/>', {text: "Replace Commands Executable"}).click(function() {
                $('#menu').hide();
                $("#replaceServiceCommandsReleaseName").val(releaseName);
                $("#replaceServiceCommandsHostType").val(hostType);
                $("#replaceServiceCommandsServiceName").val(serviceName);
                $("#replaceServiceCommandsDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(replaceServiceCommands));

            var transferService = $('<li/>', {text: "Transfer Service"}).click(function() {
                $('#menu').hide();
                $("#transferServiceReleaseName").val(releaseName);
                $("#transferServiceHostType").val(hostType);
                $("#transferServiceName").val(serviceName);
                $("#transferServiceDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(transferService));

            var updateService = $('<li/>', {text: "Update Service"}).click(function() {
                $('#menu').hide();
                $("#updateServiceReleaseName").val(releaseName);
                $("#updateServiceHostType").val(hostType);
                $("#updateServiceName").val(serviceName);
                $("#updateServiceLink").val(service.serviceLink);
                $("#updateServiceLogin").val(service.login);
                $("#updateServiceDialog").dialog("open");
            });
            serviceMenu.push(setMenuImage(updateService));

            // Menu
            showMenu(serviceMenu, this);
            return false;
        });

        // Set Tooltip
        serviceButton.tooltip({
            items: "[class]",
            content: function() {
                // Create a charts table
                var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});

                // Executable
                var td1 = $('<td/>', {'class': 'hostname', text: 'Login'});
                var td2 = $('<td/>', {text: service.login});
                table.append($('<tr/>').append(td1, td2));

                // Title
                var td1 = $('<td/>', {'class': 'hostname', text: 'Password (encrypted)'});
                var td2 = $('<td/>', {text: service.password});
                table.append($('<tr/>').append(td1, td2));

                // Return
                return table;
            }});

        var td = $('<td/>');
        tr.append(td);

        // If no commands
        if (!service.command.length) {
            td.text(LANG.noOverridden);
        }

        // For each command
        $.each(service.command, function() {
            var command = this;

            // Create a Command Button
            var commandButton = $('<button/>', {"class": "hostname", text: command.commandId});
            td.append(commandButton);

            // Set Icon
            setCommandIcon(commandButton, 'ui-icon-triangle-1-s').click(function() {

                // Hide Tooltip
                $('.ui-tooltip').hide();

                // Create Button Menu
                var serviceMenu = [];

                // Charts for Reports with Match only
                if (command.match && command.group === 'Reports') {
                    var addChart = $('<li/>', {text: "Add Chart"}).click(function() {
                        $('#menu').hide();
                        $("#addChartReleaseName").val(releaseName);
                        $("#addChartHostType").val(host.hostType);
                        $("#addChartServiceName").val(service.serviceName);
                        $("#addChartId").val(command.commandId);
                        $("#addChartDialog").dialog("open");
                    });
                    serviceMenu.push(setMenuImage(addChart));
                }

                var removeCommand = $('<li/>', {text: "Remove Command"}).click(function() {
                    $('#menu').hide();
                    $("#removeCommandReleaseName").val(releaseName);
                    $("#removeCommandHostType").val(hostType);
                    $("#removeCommandServiceName").val(serviceName);
                    $("#removeCommandId").val(command.commandId);
                    $("#removeCommandDialog").dialog("open");
                });
                serviceMenu.push(setMenuImage(removeCommand));

                var updateCommand = $('<li/>', {text: "Update Command"}).click(function() {
                    $('#menu').hide();
                    $("#updateCommandReleaseName").val(releaseName);
                    $("#updateCommandHostType").val(hostType);
                    $("#updateCommandServiceName").val(serviceName);
                    $("#updateCommandId").val(command.commandId);
                    $("#updateCommandExec").val(command.exec);
                    $("#updateCommandTitle").val(command.title);
                    $("#updateCommandGroup").val(command.group);
                    $("#updateCommandMatch").val(command.match);
                    $("#updateCommandMatch2").val(command.match2);
                    $("#updateCommandNotMatch").val(command.notMatch);
                    $("#updateCommandNotMatch2").val(command.notMatch2);
                    $("#updateCommandDialog").dialog("open");
                });
                serviceMenu.push(setMenuImage(updateCommand));

                // Menu
                showMenu(serviceMenu, this);
                return false;
            });

            // Set Tooltip
            commandButton.tooltip({
                items: "[class]",
                content: function() {
                    // Create a charts table
                    var table = $('<table/>', {'class': 'ui-widget ui-widget-content'});

                    // Executable
                    var td1 = $('<td/>', {'class': 'hostname', text: 'Executable'});
                    var td2 = $('<td/>', {text: command.exec});
                    table.append($('<tr/>').append(td1, td2));

                    // Title
                    var td1 = $('<td/>', {'class': 'hostname', text: 'Title'});
                    var td2 = $('<td/>', {text: command.title});
                    table.append($('<tr/>').append(td1, td2));

                    // Timeout
                    if (command.timeout) {
                        var td1 = $('<td/>', {'class': 'hostname', text: 'Timeout'});
                        var td2 = $('<td/>', {text: command.timeout});
                        table.append($('<tr/>').append(td1, td2));
                    }

                    // Group
                    var td1 = $('<td/>', {'class': 'hostname', text: 'Group'});
                    var td2 = $('<td/>', {text: command.group});
                    table.append($('<tr/>').append(td1, td2));

                    // Match
                    var td1 = $('<td/>', {'class': 'hostname', text: 'Match'});
                    var td2 = $('<td/>', {text: command.match});
                    table.append($('<tr/>').append(td1, td2));

                    // Match2
                    if (command.match2) {
                        var td1 = $('<td/>', {'class': 'hostname', text: 'Match 2'});
                        var td2 = $('<td/>', {text: command.match2});
                        table.append($('<tr/>').append(td1, td2));
                    }

                    // NotMatch
                    var td1 = $('<td/>', {'class': 'hostname', text: 'NotMatch'});
                    var td2 = $('<td/>', {text: command.notMatch});
                    table.append($('<tr/>').append(td1, td2));

                    // NotMatch2
                    if (command.notMatch2) {
                        var td1 = $('<td/>', {'class': 'hostname', text: 'NotMatch 2'});
                        var td2 = $('<td/>', {text: command.notMatch2});
                        table.append($('<tr/>').append(td1, td2));
                    }

                    // Return
                    return table;
                }});
        });
    });

    // Add Service Buttons
    var addServiceButton = $('<button/>', {text: "Add Service"});
    setButtonIcon(addServiceButton).click(function() {
        $("#addServiceReleaseName").val(releaseName);
        $("#addServiceHostType").val(hostType);
        $("#addServiceDialog").dialog("open");
    });

    var addServiceLinkButton = $('<button/>', {text: "Add Service Link"});
    setButtonIcon(addServiceLinkButton).click(function() {
        $("#addServiceLinkReleaseName").val(releaseName);
        $("#addServiceLinkHostType").val(hostType);
        $("#addServiceLinkSelect").change();
        $("#addServiceLinkDialog").dialog("open");
    });

    var renameHostButton = $('<button/>', {text: "Rename Host"});
    setButtonIcon(renameHostButton).click(function() {
        $("#renameHostReleaseName").val(release.releaseName);
        $("#renameHostType").val(host.hostType);
        $("#renameHostDialog").dialog("open");

        // Close Tab
        li.remove();
    });

    var removeHostButton = $('<button/>', {text: "Remove Host"});
    setButtonIcon(removeHostButton).click(function() {
        $("#removeHostReleaseName").val(release.releaseName);
        $("#removeHostType").val(host.hostType);
        $("#removeHostDialog").dialog("open");

        // Close Tab
        li.remove();
    });

    // Return div
    return div.append(addServiceButton, addServiceLinkButton, renameHostButton, removeHostButton);
}
