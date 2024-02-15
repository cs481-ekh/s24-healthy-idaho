# capstone-template
BSU CS481 Capstone project template

## Build Instructions
Before starting the application, you must have the following installed.
- python3
- podman
- podman-compose

For ease of deployment, there is an included shell script that will install the prerequisite binaries if the host is based on Ubuntu 22.04 LTS. If this is the case, you can use the `./prereq.sh` script to install (assuming you have sudo permissions).

Otherwise, you must ensure the above 3 are available on your host.

You should now be able to use the `build.sh` script. Alternatively, you can use the `podman-compose up` command on the root of the project.

To stop the application, you can use the `podman-compose down` command. Alternatively, you can use the `clean.sh` script to stop the application as well as remove the associated containers.

If you get the following warning:
```
WARN[0000] Error validating CNI config file /home/usr/.config/cni/net.d/s24-healthy-idaho_hh-net.conflist: [plugin bridge does not support config version "1.0.0" plugin portmap does not support config version "1.0.0" plugin firewall does not support config version "1.0.0" plugin tuning does not support config version "1.0.0"] 
```

Navigate to the `/home/usr/.config/cni/net.d` directory on your host, and edit the `s24-healthy-idaho_hh-net.conflist` file that podman should have generated using your preferred text editor and change the `cniVersion` from `1.0.0` to `0.4.0`. This is supposedly a bug with podman specifically. Once that's done, use the `podman system reset --force` to reset podman and run the application again.

Build was tested and confirmed working on:
- Ubuntu 22.04 LTS (WSL)
- Ubuntu 22.04 LTS Desktop

## Resources
- https://itslinuxfoss.com/install-podman-compose-ubuntu-22-04/ (Installing podman-compose on Ubuntu 22.04)