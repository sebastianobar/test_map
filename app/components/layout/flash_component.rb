# frozen_string_literal: true

module Layout
  class FlashComponent < ViewComponent::Base
    def initialize(flash:)
      @flash = flash
    end
  end
end
