{ pkgs, ... }: {

  channel = "stable-23.11"; # or "unstable"

  packages = [
    pkgs.jdk11
    pkgs.gradle_7
    pkgs.android-studio
    pkgs.android-tools
    pkgs.cordova
    pkgs.nodejs_18
    pkgs.nodePackages_latest.npm
    pkgs.sdkmanager
  ];
}