export class Constants {

    public static baseUrl: string = 'https://abc.com:8446/EPM/rest/GatesSchemes/';
    public static gatesDetailUrl: string = 'abc.:8446/EPM/rest/GatesDetail/';
    public static addObject = {
        "0": {
            "userId": 615,
            "projectId": 1301,
            "title": "abc123",
            "description": "abc123"
        },
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": []
    }
    public static updateObject = {
        "0":
        {
            "gatesSchemeId": 294,
            "title": "abc123",
            "description": "abc1234"
        }
        , "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": []
    }
    public static getSchemeObject = {
        "gatesSchemes": {
            "gateSchemeId": 0
        },
        "pagination": {
            "pageNo": 0,
            "itemsPerPage": 10
        },
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": {
            "gatesSchemes": {
                "gateSchemeId": 0
            },
            "pagination": {
                "pageNo": 0,
                "itemsPerPage": 10
            }
        }
    }
    public static deleteSchemeObject   = {
        "gatesSchemeId": 294,
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": {
          "gatesSchemeId": {}
        }
      };

      public static findAllGatesDetailObject={
        "gatesDetail": {
            "gatesSchemeId": 192
        },
        "pagination": {
            "pageNo": 0,
            "itemsPerPage": 10
        },
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": {
            "gatesDetail": {
                //"gatesSchemeId": 192
            },
            "pagination": {
                "pageNo": 0,
                "itemsPerPage": 100
            }
        }
    }
    public static deleteGatesDetailObject={
        "gateDetailId": 1797,
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": {
            "gateDetailId": {}
        }
    }
    public static addGatesDetailObject={
        "0": {
            "gatesSchemeId": 195,
            "gateTitle": "sda",
            "description": "dsa",
            "gateShortName": "sda",
            "rangeMin": 0,
            "rangeMax": 5,
            "gateColor": ""
        },
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": []
    }
    public static updateGatesDetailObject={
        "0": {
            "gateDetailId": 1698,
            "gatesSchemeId": 192,
            "gateTitle": "C Gate",
            "description": "C Gate",
            "gateColor": "#F1D200",
            "gateShortName": "C",
            "rangeMin": 60,
            "rangeMax": 60
        },
        "subProjectId": 0,
        "currentProjectId": 1301,
        "currentUserId": 615,
        "activatedRoleId": 1,
        "activatedRoleTitle": "Admin",
        "applicationId": 5,
        "versionId": 0,
        "projectTitle": "XIGT testing",
        "username": "hive.huzaifaqa",
        "projecttype": "Project",
        "clientId": -1,
        "data": []
    }
}