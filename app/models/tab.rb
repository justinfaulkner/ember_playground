class Tab < ActiveRecord::Base
  attr_accessible :name, :table_id

  belong_to :table
  has_many :tab_items
end
