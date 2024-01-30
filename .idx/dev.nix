{ pkgs, ... }: {

  channel = "stable-23.11"; # or "unstable"

  idx.workspace.onCreate = {
    add-nix-channels = "nix-channel --add https://tadfisher.github.io/android-nixpkgs android-nixpkgs; nix-channel --update android-nixpkgs";
    start-shell = "nix-shell /home/user/WheresMyFlight/sdk.nix";
  };

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