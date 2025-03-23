FROM ubuntu:latest

# Set environment variables to make apt non-interactive
ENV DEBIAN_FRONTEND=noninteractive

# Update and install required packages
RUN apt-get update && \
    apt-get install -y curl wget git zsh gnupg ca-certificates lsb-release && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js and npm (using NodeSource for latest LTS version)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Create a new user to avoid using root (optional, but recommended)
RUN useradd -ms /bin/zsh devuser

# Copy the config file into the home directory
COPY /.config/.zshrc /home/devuser/.zshrc

# Set proper ownership for the copied file
RUN chown devuser:devuser /home/devuser/.zshrc

USER devuser
WORKDIR /home/devuser

# Install Oh My Zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# Set zsh as default shell (redundant here since user already uses /bin/zsh, but explicit is good)
SHELL ["/bin/zsh", "-c"]

# Expose port if needed (optional)
# EXPOSE 3000

# Default command
CMD ["zsh"]
