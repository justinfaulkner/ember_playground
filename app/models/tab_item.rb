class TabItem < ActiveRecord::Base
  attr_accessible :cents, :name, :tab_id

  belongs_to :food
  ha
end
